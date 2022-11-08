import React, {FC, useEffect, useRef, useState} from 'react';

import style from './style.module.scss';

interface IEditorProps {
  name: string;
  value: string;
  onChange: (data: string) => void;
}

const Editor: FC<IEditorProps> = ({onChange, name, value}) => {
  // const API_URL = '/api';
  // const UPLOAD_ENDPOINT = '/upload-image';

  const uploadAdapter = (loader: any) => {
    return {
      upload: () => {
        return new Promise((resolve: any, reject: any) => {
          const body = new FormData();
          loader.file.then((file: any) => {
            body.append('uploading', file);
            console.log(body);
          });
        });
      }
    };
  };

  const uploadPlugin = (editor: any) => {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return uploadAdapter(loader);
    };
  };

  const editorRef = useRef<any>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const {CKEditor, ClassicEditor} = editorRef.current || {};

  useEffect(() => {
    (async () => {
      const classic = await import(/* webpackChunkName: "vendor.ckclassic" */ '@ckeditor/ckeditor5-build-classic');
      const editor = await import(/* webpackChunkName: "vendor.ckeditor" */ '@ckeditor/ckeditor5-react');
      editorRef.current = {CKEditor: editor.CKEditor, ClassicEditor: classic.default};
      setEditorLoaded(true);
    })();
  }, []);

  return (
    <div className={style.ckeditor}>
      {editorLoaded ? (
        <CKEditor
          name={name}
          id={'editor'}
          config={{
            extraPlugins: [uploadPlugin]
            // ckfinder: {
            //   uploadUrl: 'http://localhost:3333/api/uploadImage'
            // }
          }}
          editor={ClassicEditor}
          data={value}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading...</div>
      )}
    </div>
  );
};

export default Editor;
