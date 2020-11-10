import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {func, number, string} from 'prop-types';
import styled from 'styled-components';
import {ChromePicker} from 'react-color';

const Cover = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

const Modal = styled.div`
  position: absolute;
  bottom: 36px;
`;

const ColorPicker = ({
  color,
  onChange,
  onClose,
  left,
}) => {
  const [container] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []); // eslint-disable-line

  const renderable = (
    <>
      <Cover
        onClick={onClose}
      />
      <Modal
        style={{left}}
      >
        <ChromePicker
          color={color}
          disableAlpha
          onChangeComplete={onChange}
        />
      </Modal>
    </>
  );

  return ReactDOM.createPortal(
    renderable,
    container,
  );
};

ColorPicker.propTypes = {
  color: string.isRequired,
  onClose: func.isRequired,
  onChange: func.isRequired,
  shapeGroupId: string.isRequired,
  left: number.isRequired,
};

export default ColorPicker;
