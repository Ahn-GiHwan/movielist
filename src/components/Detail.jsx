import { useEffect } from "react";
import styled from "styled-components";

const H3 = styled.h3`
  margin-top: 2%;
  background-color: #eee;
  padding: 5px;
  /* border-radius: 10px; */
  text-align: center;
`;

const BgImg = styled.div`
  position: absolute;
  background-image: url(${(props) => props.img && props.img});
  margin-top: 1%;
  width: 100vw;
  height: 88%;
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: -1;
  opacity: 0.7;
`;

const Container = styled.section``;

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

const LeftCon = styled.div`
  display: flex;
`;
const RightCon = styled.div`
  width: 50%;
  background-color: #eee;
  padding: 5px;
  background-color: #1f1e1e;
  position: relative;
`;

const Badges = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px;
  padding: 5px;
  flex-wrap: nowrap;
  span {
    margin-right: 10px;
  }
`;
const P = styled.p`
  color: white;
  font-size: 15px;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
`;

const BackIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: scale(1.7);
  color: white;
  cursor: pointer;
`;

export default function Detail({ datas, param, imgAddress, getMovie, onBack }) {
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  const colors = [
    "success",
    "danger",
    "light",
    "dark",
    "secondary",
    "primary",
    "info",
    "warning",
  ];

  if (Number(param.id) === datas.id && datas.backdrop_path) {
    return (
      <>
        <BgImg img={imgAddress + datas.backdrop_path} />
        <Container className="container-sm">
          <Main>
            <LeftCon>
              <img
                src={imgAddress + datas.poster_path}
                className="img-fluid"
                alt="poster"
              />
            </LeftCon>
            <RightCon>
              <BackIcon onClick={onBack}>
                <i className="bi bi-arrow-left-square-fill"></i>
              </BackIcon>
              <Badges>
                <span className="btn btn-sm btn-primary">
                  {datas.release_date}
                </span>
                <span className="btn btn-sm btn-info">
                  <i className="bi bi-hand-thumbs-up"> </i>
                  {datas.vote_average} / 10
                </span>
                <span className="btn btn-sm btn-warning">
                  <i className="bi bi-clock"> </i>
                  {datas.runtime}
                </span>
              </Badges>
              <Badges>
                <div
                  className="btn-group btn-group-sm"
                  role="group"
                  aria-label="Basic example"
                >
                  {datas.genres !== undefined
                    ? datas.genres.map((v, id) => {
                        return (
                          <div key={id} className={`btn btn-${colors[id]}`}>
                            {v.name}
                          </div>
                        );
                      })
                    : ""}
                </div>
              </Badges>
              <H3>{datas.original_title} </H3>
              <hr />
              <div>
                <P className="lead">{datas.overview}</P>
              </div>
            </RightCon>
          </Main>
        </Container>
      </>
    );
  } else {
    return (
      <Loading>
        <div
          className="spinner-border"
          role="status"
          style={{ width: "70px", height: "70px" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </Loading>
    );
  }
}
