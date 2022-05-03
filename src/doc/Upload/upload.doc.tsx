import React from "react";
import Layout from "../Layout/layout";
import MarkDownShow from "../MarkdownShow/markdownShow";
import uploadDoc from "../../markdown/uploadDoc.md";
import {Button, Icon, Upload} from "genshinui";
import {UploadFile} from "genshinui/dist/components/Upload/upload";

const UploadDoc: React.FC = () => {
  const beforeUpload = (file: File) => {
    console.log(file);
    return true;
  };
  const onProgress = (percentage: number, file: File) => {
    console.log(percentage, file);
  };
  const onSuccess = (data: any, file: File) => {
    console.log(data, file);
  };
  const onError = (err: any, file: File) => {
    console.log(err, file);
  };
  const onChange = (file: File) => {
    console.log(file);
  };
  const onRemove = (file: UploadFile) => {
    console.log(file);
  };
  return (
    <Layout>
      <MarkDownShow mdData={uploadDoc}>
        <h3>Upload 上传</h3>
        <div className="uploadDoc">
          <div className="uploadDocItem">
            <Upload
              action={"https://www.mocky.io/v2/5cc8019d300000980a055e76"}
              beforeUpload={beforeUpload}
              onProgress={onProgress}
              onSuccess={onSuccess}
              onError={onError}
              onChange={onChange}
              onRemove={onRemove}
              defaultFileList={[
                {uid: "123", size: 1234, name: "hello.md", status: "uploading", percent: 70},
                {uid: "122", size: 1234, name: "genshin.md", status: "success", percent: 30},
                {uid: "121", size: 1234, name: "pkc.md", status: "error", percent: 30}
              ]}
            >
              <Button btnType={"primary"} size={"lg"}>上传文件</Button>
            </Upload>
          </div>

          <Upload
            action={"https://www.mocky.io/v2/5cc8019d300000980a055e76"}
            beforeUpload={beforeUpload}
            onProgress={onProgress}
            onSuccess={onSuccess}
            onError={onError}
            onChange={onChange}
            onRemove={onRemove}
            drag={true}
          >
            <Icon icon="upload" size="5x" theme="secondary"/>
            <br/>
            <p>Drag file over to upload</p>
          </Upload>
        </div>
      </MarkDownShow>
    </Layout>
  );
};

export default UploadDoc;
