import { useEffect } from "react";
import styled from "styled-components";
import { Pagination } from "antd";

const H3 = styled.h3`
  margin-top: 2%;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.div`
  height: 80px;
`;

export default function NowPlaying({ title, datas, imgAddress, getMovie }) {
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  // console.log(datas.results);

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
      <Cards>
        {datas.results.map((v) => {
          return (
            <div
              className="card"
              style={{ maxWidth: "200px", margin: "1% 0" }}
              key={v.id}
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
                <button className="btn btn-primary" onClick={() => {}}>
                  detail
                </button>
              </div>
            </div>
          );
        })}
      </Cards>
      <hr />
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
}
