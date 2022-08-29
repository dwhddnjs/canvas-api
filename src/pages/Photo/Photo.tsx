import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

type stateTypes = {
  state: {
    photo: string;
  };
};

const Photo = () => {
  const canvasRef = useRef<any>(null);
  const context = canvasRef.current?.getContext('2d');

  const { state } = useLocation() as stateTypes;

  const [isDragging, setIsDragging] = useState(false);
  const img = new Image();
  img.src = state.photo;

  useEffect(() => {
    if (!canvasRef) return;

    const context = canvasRef.current?.getContext('2d');

    img.onload = () => {
      context?.drawImage(
        img,
        0,
        0,
        canvasRef.current?.width,
        canvasRef.current?.height,
      );
    };
  }, [context]);

  const startDragging = ({ nativeEvent }: any) => {
    nativeEvent.preventDefault();
    setIsDragging(true);
    const { offsetX, offsetY, clientX, clientY } = nativeEvent;
    const { offsetLeft, offsetTop } = context?.canvas;
    const x = clientX - offsetLeft;
    const y = clientY - offsetTop;

    dragImgRotate(
      img,
      canvasRef.current?.width,
      canvasRef.current?.height,
      90,
      1,
    );
    console.log('x: ', x);
    console.log('y: ', y);

    // context.current?.beginPath();
    // context.current?.moveTo(offsetX, offsetY);
    console.log('드래그 시작');
  };

  const dragImgRotate = (
    img: any,
    x: any,
    y: any,
    degrees: any,
    scale: any,
  ) => {
    let w = img.width * scale;
    let h = img.height * scale;
    context.save();
    context.translate(x, y);
    context.rotate((degrees * Math.PI) / 180);
    context.drawImage(img, -(w / 2), -(h / 2), w, h);
    context.restore();
  };

  const finishDragging = () => {
    context.current?.closePath();
    setIsDragging(false);
    console.log('드래그 끝');
  };

  // const draw = ({ nativeEvent }: any) => {
  //   if (!isDragging) return;
  //   const { offsetX, offsetY } = nativeEvent;
  //   context.current?.lineTo(offsetX, offsetY);
  //   console.log(
  //     'context.current?.lineTo(offsetX, offsetY): ',
  //     context.current?.lineTo(offsetX, offsetY),
  //   );
  // };

  return (
    <PhotoContainer>
      <PhotoImg>
        <canvas
          ref={canvasRef}
          width={890}
          height={800}
          onContextMenu={startDragging}
          onMouseUp={finishDragging}
          // onMouseMove={draw}
        />
      </PhotoImg>
    </PhotoContainer>
  );
};

export default Photo;

const PhotoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const PhotoImg = styled.div``;
