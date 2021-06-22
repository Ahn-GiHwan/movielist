import { useEffect } from "react";
import styled from "styled-components";
import { Pagination } from "antd";

const H3 = styled.h3`
  margin-top: 2%;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Title = styled.div`
  height: 80px;
`;

const Paging = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: ${(props) => props.flex && props.flex};
`;

const Card = styled.div`
  margin: 1%;
  max-width: 180px;
  :hover {
    .card-body {
      background-color: skyblue;
      color: white;
    }
    .card-title {
      color: white;
    }

    box-shadow: 10px 10px 10px gray;
    transition: 0.3s;
    cursor: pointer;
  }
`;

export default function ShowMovie({
  title,
  datas,
  totalPage,
  imgAddress,
  getMovie,
  clickDetail,
  onPage,
}) {
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div className="container-sm">
      <H3>
        {title}
        {datas.dates && (
          <span className="badge bg-success" style={{ margin: "0 10px" }}>
            {datas.dates.minimum} ~ {datas.dates.maximum}
          </span>
        )}
      </H3>
      <hr />
      <Paging flex="flex-end">
        <Pagination
          simple
          current={datas.page}
          defaultCurrent={1}
          total={totalPage}
          onChange={(e) => {
            onPage(e);
          }}
        />
      </Paging>
      <Cards>
        {datas.results.map((v) => {
          return (
            <Card
              className="card"
              key={v.id}
              onClick={() => {
                clickDetail(v.id);
              }}
            >
              <img
                src={imgAddress + v.poster_path}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <Title>
                  <h5 className="card-title">{v.title}</h5>
                </Title>
                <hr />
                <p className="card-text">Release | {v.release_date}</p>
              </div>
            </Card>
          );
        })}
      </Cards>
      <hr />
      <Paging flex="center">
        <Pagination
          showSizeChanger={null}
          current={datas.page}
          defaultCurrent={1}
          total={totalPage}
          onChange={(e) => {
            onPage(e);
            window.scrollTo(0, 0);
          }}
        />
      </Paging>
    </div>
  );
}
