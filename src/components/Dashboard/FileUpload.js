// FileUpload.js
import React from 'react';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';

const FileUpload = ({ fileList, onChange, onPreview }) => (
  <div>
    <p className='mt-5 uploadProfileImg'>Upload Profile Picture:</p>
    <ImgCrop rotationSlider>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        maxCount={1}  // Set the maximum count to 1
      >
        {fileList.length === 0 && '+ Upload'}
      </Upload>
    </ImgCrop>
    <p className='pngJpeg'>PNG, JPEG, JPG</p>
  </div>
);

export default FileUpload;
