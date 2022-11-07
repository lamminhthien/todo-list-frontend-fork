// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import React, {FC, useEffect, useRef, useState} from 'react';

import style from './style.module.scss';

interface IEditorProps {
  name: string;
  value: string;
  onChange: (data: string) => void;
}

const Editor: FC<IEditorProps> = ({onChange, name, value}) => {
  const editorRef = useRef<any>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const {CKEditor, ClassicEditor} = editorRef.current || {};

  useEffect(() => {
    (async () => {
      const classic = await import(/* webpackChunkName: "vendor.ckclassic" */ '@ckeditor/ckeditor5-build-classic');
      const editor = await import(/* webpackChunkName: "vendor.ckeditor" */ '@ckeditor/ckeditor5-react');
      // const imageUpload = import(/* webpackChunkName: "vendor.ckeditor" */ '@ckeditor/ckeditor5-image/src/imageupload');
      const simpleUpload = await import(/* webpackChunkName: "vendor.ckeditor" */ '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter');
      editorRef.current = {CKEditor: editor.CKEditor, ClassicEditor: classic.default};
      setEditorLoaded(true);

      ClassicEditor.create(document.querySelector('#editor'), {
        plugins: [simpleUpload],
        // toolbar: [ ... ],
        simpleUpload: {
          // The URL that the images are uploaded to.
          uploadUrl: 'http://example.com',

          // Enable the XMLHttpRequest.withCredentials property.
          withCredentials: true,

          // Headers sent along with the XMLHttpRequest to the upload server.
          headers: {
            'X-CSRF-TOKEN': 'CSRF-Token',
            Authorization: 'Bearer <JSON Web Token>'
          }
        }
      });
    })();
  }, []);

  // .then( ... )
  // .catch( ... );

  return (
    <div className={style.ckeditor}>
      {editorLoaded ? (
        <CKEditor
          name={name}
          id={'editor'}
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
