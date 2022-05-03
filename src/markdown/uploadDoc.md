### 基础用法

```tsx
import {Button, Icon, Upload} from "genshinui";
import { UploadFile } from "genshinui/dist/components/Upload/upload";

export default () => {
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
      <>
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
                {uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 70},
                {uid: '122', size: 1234, name: 'genshin.md', status: 'success', percent: 30},
                {uid: '121', size: 1234, name: 'pkc.md', status: 'error', percent: 30}
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
      </>
)}
```

### API

|      参数       |                    说明                    |                    类型                    | 默认值 | 版本 |
| :-------------: | :----------------------------------------: | :----------------------------------------: | :----: | :--: |
|     action      |                 上传的地址                 |                   string                   |        |      |
| defaultFileList |           默认已经上传的文件列表           |                UploadFile[]                |        |      |
|     headers     |             设置上传的请求头部             |                   object                   |        |      |
|      name       |            发到后台的文件参数名            |                   string                   |        |      |
|      data       |              上传所需额外数据              |                   object                   |        |      |
| withCredentials |            上传是否携带 cookie             |                  boolean                   |        |      |
|     accept      |             接受上传的文件类型             |                   string                   |        |      |
|    multiple     |              是否支持多选文件              |                  boolean                   |        |      |
|      drag       |              是否支持拖动上传              |                  boolean                   | false  |      |
|  beforeUpload   |    上传文件之前的钩子，参数为上传的文件    | (file: File) => boolean \| Promise< File > |        |      |
|   onProgress    |   上传过程中的钩子，参数为（进度，文件）   |  (percentage: number, file: File) => void  |        |      |
|    onSuccess    | 上传成功时的钩子，参数为（成功信息，文件） |      (data: any, file: File) => void       |        |      |
|     onError     | 上传失败时的钩子，参数为（失败信息，文件） |       (err: any, file: File) => void       |        |      |
|    onChange     |            上传文件改变时的状态            |            (file: File) => void            |        |      |
|    onRemove     |   点击移除文件时的回调，参数为删除的文件   |         (file: UploadFile) => void         |        |      |

