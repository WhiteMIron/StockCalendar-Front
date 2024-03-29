import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import edit from '@images/edit.png';
import { Button } from './styles';
import useInput from '@hooks/useInput';
import axios from 'axios';
import moment from 'moment';
import { DateValue } from '@typings/date';
import uuid from 'react-uuid';
import ToastEdit from '@components/TextEdit/ToastEdit';
import { Viewer } from '@toast-ui/react-editor';
import defines from '@constants/defines';
interface StocksTodayMemoProps {
  dateValue: DateValue;
  selectedDate: string;
}
const StocksTodayMemo = ({ selectedDate, dateValue }: StocksTodayMemoProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [summary, onSummary, setSummary] = useInput('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSummary(() => '');
    axios
      .get(`/api/summary`, {
        params: { date: selectedDate },
      })
      .then((response) => {
        if (response.data.content) {
          setSummary(response.data.content);
        } else {
          setSummary(() => '');
        }
        setLoading(true);
      })
      .catch((error) => {})
      .finally(() => {});
    return;
  }, [selectedDate]);

  const onSubmit = () => {
    axios
      .post(`/api/summary`, {
        content: summary,
        date: selectedDate,
      })
      .then((response) => {
        setSummary(response.data.content);
        setIsEdit(!isEdit);
      })
      .catch((error) => {})
      .finally(() => {});
  };

  return (
    <Container>
      {loading ? (
        <>
          <TitleBox>
            <strong>{moment(dateValue?.toString()).format('M/D')} 증시 요약</strong>
            {!isEdit ? (
              <>
                <button
                  style={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setIsEdit(!isEdit);
                  }}
                  title="편집"
                >
                  <img src={edit} alt="편집"></img>
                </button>{' '}
              </>
            ) : (
              <>
                <Button color="#fff" bgColor="dodgerblue" height="22px" marginLeft="5px" onClick={onSubmit}>
                  저장
                </Button>
              </>
            )}
          </TitleBox>
          {!isEdit ? (
            <TextBox>{summary && <Viewer initialValue={summary} />}</TextBox>
          ) : (
            <ToastEdit
              placeHolder="오늘의 증시요약을 작성해주세요."
              height="100%"
              content={summary}
              setContent={setSummary}
            />
          )}
        </>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: white;
  overflow-y: auto;
`;

const TextBox = styled.div`
  word-break: break-all;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: white;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  overflow-y: auto;
  padding: 20px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px 0;
  margin-bottom: 5px;
`;

export default StocksTodayMemo;
