import React, {useCallback, useState, useRef} from "../../_snowpack/pkg/react.js";
import {useDropzone} from "../../_snowpack/pkg/react-dropzone.js";
import Button from "../../_reactComponents/PanelHeaderComponents/Button.js";
import {
  useSetRecoilState,
  useRecoilValue,
  atomFamily,
  selectorFamily,
  useRecoilState,
  useRecoilCallback
} from "../../_snowpack/pkg/recoil.js";
import ButtonGroup from "../../_reactComponents/PanelHeaderComponents/ButtonGroup.js";
import CollapseSection from "../../_reactComponents/PanelHeaderComponents/CollapseSection.js";
import {useToast, toastType} from "../Toast.js";
import axios from "../../_snowpack/pkg/axios.js";
import {getSHAofContent} from "../ToolHandlers/CourseToolHandler.js";
import {searchParamAtomFamily} from "../NewToolRoot.js";
import {CopyToClipboard} from "../../_snowpack/pkg/react-copy-to-clipboard.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {
  faClipboard
} from "../../_snowpack/pkg/@fortawesome/free-regular-svg-icons.js";
function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0)
    return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}
const supportingFilesAndPermissionByDoenetIdAtom = atomFamily({
  key: "supportingFilesAndPermissionByDoenetId",
  default: selectorFamily({
    key: "supportingFilesAndPermissionByDoenetId/Default",
    get: (doenetId) => async () => {
      let {data} = await axios.get("/api/loadSupprtingFileInfo.php", {params: {doenetId}});
      return data;
    }
  })
});
const supportingFilesAndPermissionByDoenetIdSelector = selectorFamily({
  get: (doenetId) => ({get}) => {
    return get(supportingFilesAndPermissionByDoenetIdAtom(doenetId));
  },
  set: (doenetId) => ({set}, newValue) => {
    set(supportingFilesAndPermissionByDoenetIdAtom(doenetId), newValue);
  }
});
function EditableText({text, submit}) {
  if (!submit) {
    submit = () => {
    };
  }
  let [editingMode, setEditingMode] = useState(false);
  let [editText, setText] = useState(text);
  let displayText = text;
  if (!editingMode && editText !== displayText) {
    displayText = editText;
  }
  if (!editingMode) {
    return /* @__PURE__ */ React.createElement("span", {
      onClick: () => setEditingMode(true)
    }, displayText);
  }
  return /* @__PURE__ */ React.createElement("input", {
    type: "text",
    width: "100px",
    value: editText,
    onChange: (e) => setText(e.target.value),
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        setEditingMode(false);
        submit(editText);
      }
    }
  });
}
export default function SupportingFilesMenu(props) {
  const addToast = useToast();
  const doenetId = useRecoilValue(searchParamAtomFamily("doenetId"));
  const [{canUpload, userQuotaBytesAvailable, supportingFiles, quotaBytes}, setSupportFileInfo] = useRecoilState(supportingFilesAndPermissionByDoenetIdSelector(doenetId));
  let typesAllowed = ["image/jpeg", "image/png"];
  let [uploadProgress, setUploadProgress] = useState([]);
  let numberOfFilesUploading = useRef(0);
  const updateDescription = useRecoilCallback(({set}) => async (description, contentId) => {
    let {data} = await axios.get("/api/updateFileDescription.php", {params: {doenetId, contentId, description}});
    set(supportingFilesAndPermissionByDoenetIdSelector(doenetId), (was) => {
      let newObj = {...was};
      let newSupportingFiles = [...was.supportingFiles];
      newSupportingFiles.map((file, index) => {
        if (file.contentId === contentId) {
          newSupportingFiles[index] = {...newSupportingFiles[index]};
          newSupportingFiles[index].description = description;
        }
      });
      newObj.supportingFiles = newSupportingFiles;
      return newObj;
    });
  }, [doenetId]);
  const deleteFile = useRecoilCallback(({set}) => async (contentId) => {
    let {data} = await axios.get("/api/deleteFile.php", {params: {doenetId, contentId}});
    let {userQuotaBytesAvailable: userQuotaBytesAvailable2} = data;
    set(supportingFilesAndPermissionByDoenetIdSelector(doenetId), (was) => {
      let newObj = {...was};
      newObj.supportingFiles = was.supportingFiles.filter((file) => file.contentId !== contentId);
      newObj.userQuotaBytesAvailable = userQuotaBytesAvailable2;
      return newObj;
    });
  }, [doenetId]);
  const onDrop = useCallback((files) => {
    let success = true;
    let sizeOfUpload = 0;
    files.map((file) => {
      if (!typesAllowed.includes(file.type)) {
        addToast(`File '${file.name}' of type '${file.type}' is not allowed. No files uploaded.`, toastType.ERROR);
        success = false;
      }
      sizeOfUpload += file.size;
    });
    let uploadText = bytesToSize(sizeOfUpload);
    let overage = bytesToSize(sizeOfUpload - userQuotaBytesAvailable);
    if (sizeOfUpload > userQuotaBytesAvailable) {
      addToast(`Upload size ${uploadText} exceeds quota by ${overage}. No files uploaded.`, toastType.ERROR);
      success = false;
    }
    if (numberOfFilesUploading.current > 0) {
      addToast(`Already uploading files.  Please wait before sending more.`, toastType.ERROR);
      success = false;
    }
    files.map((file) => {
      if (file.size >= 2e6) {
        addToast(`File '${file.name}' is larger than 2MB. No files uploaded.`, toastType.ERROR);
        success = false;
      }
    });
    if (!success) {
      return;
    }
    numberOfFilesUploading.current = files.length;
    files.map((file) => {
      let initialFileInfo = {fileName: file.name, size: file.size, progressPercent: 0};
      setUploadProgress((was) => [...was, initialFileInfo]);
    });
    files.map((file, fileIndex) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onabort = () => {
      };
      reader.onerror = () => {
      };
      reader.onload = () => {
        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("doenetId", doenetId);
        axios.post("/api/upload.php", uploadData, {onUploadProgress: (progressEvent) => {
          const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader("content-length") || progressEvent.target.getResponseHeader("x-decompressed-content-length");
          if (totalLength !== null) {
            let progressPercent = Math.round(progressEvent.loaded * 100 / totalLength);
            setUploadProgress((was) => {
              let newArray = [...was];
              newArray[fileIndex].progressPercent = progressPercent;
              return newArray;
            });
          }
        }}).then(({data}) => {
          numberOfFilesUploading.current = numberOfFilesUploading.current - 1;
          if (numberOfFilesUploading.current < 1) {
            setUploadProgress([]);
          }
          let {success: success2, fileName, contentId, description, asFileName, msg, userQuotaBytesAvailable: userQuotaBytesAvailable2} = data;
          if (msg) {
            addToast(msg, toastType.ERROR);
          }
          if (success2) {
            setSupportFileInfo((was) => {
              let newObj = {...was};
              let newSupportingFiles = [...was.supportingFiles];
              newSupportingFiles.push({
                contentId,
                fileName,
                fileType: file.type,
                description,
                asFileName
              });
              newObj.supportingFiles = newSupportingFiles;
              newObj["userQuotaBytesAvailable"] = userQuotaBytesAvailable2;
              return newObj;
            });
          }
        });
      };
    });
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  let uploadProgressJSX = uploadProgress.map((info) => {
    return /* @__PURE__ */ React.createElement("div", null, info.fileName, " - ", info.progressPercent, "%");
  });
  let uploadingSection = null;
  if (canUpload) {
    uploadingSection = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, userQuotaBytesAvailable, "/", quotaBytes, " Bytes"), /* @__PURE__ */ React.createElement("div", {
      key: "drop",
      ...getRootProps()
    }, /* @__PURE__ */ React.createElement("input", {
      ...getInputProps()
    }), isDragActive ? /* @__PURE__ */ React.createElement("p", null, "Drop the files here") : /* @__PURE__ */ React.createElement(ButtonGroup, {
      vertical: true
    }, /* @__PURE__ */ React.createElement(Button, {
      width: "menu",
      value: "Upload files"
    }))), /* @__PURE__ */ React.createElement(CollapseSection, {
      title: "Accepted File Types",
      collapsed: true
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "Image"), ".jpg .png")), uploadProgressJSX);
  }
  let supportFilesJSX = [];
  supportingFiles.map(({
    contentId,
    fileName,
    fileType,
    description,
    asFileName
  }) => {
    let doenetMLCode = "Error";
    let source = `doenet:cid=${contentId}`;
    if (fileType === "image/jpeg" || fileType === "image/png") {
      doenetMLCode = `<image source='${source}' description='${description}' asfilename='${asFileName}'/>`;
    } else if (fileType === "text/csv") {
      doenetMLCode = `<dataset source='${source}' />`;
    }
    supportFilesJSX.push(/* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(EditableText, {
      text: description,
      submit: (text) => {
        updateDescription(text, contentId);
      }
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        deleteFile(contentId);
      }
    }, "delete"), /* @__PURE__ */ React.createElement(CopyToClipboard, {
      onCopy: () => addToast("Code copied to clipboard!", toastType.SUCCESS),
      text: doenetMLCode
    }, /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
      }
    }, "Code ", /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
      icon: faClipboard
    })))));
  });
  return /* @__PURE__ */ React.createElement("div", null, uploadingSection, /* @__PURE__ */ React.createElement("br", null), supportFilesJSX);
}