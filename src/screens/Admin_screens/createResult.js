import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import MyButton from "../../Component/Button";
import SelectBox from "../../Component/Select";
import SMSwitch from "../../Component/Switch";
import { sendData } from "../../config/firebasemethod";
// import loaderImage1 from "../../assets/loader.gif";
import CircularProgress from "@mui/material/CircularProgress";

function CreateResult() {
  const [model, setModel] = useState({});
  const [isLoader, setIsLoader] = useState(false);
  const [courseStatus, setCourseStatus] = useState(true);
  const [resultData, setResultData] = useState([
    {
      name: "First",
      marks: 60,
      rollNum: "101",
      result: "Pass",
    },
    {
      name: "Second",
      marks: 70,
      rollNum: "102",
      result: "Pass",
    },
    {
      name: "Third",
      marks: 80,
      rollNum: "103",
      result: "Pass",
    },
  ]);

  let submitForm = () => {
    model.isShowResult = courseStatus;
    model.result = resultData;
    console.log(model);
    // setIsLoader(true);

    sendData(model, "results")
      .then((res) => {
        // setIsLoader(true);
        console.log(res);
      })
      .catch((err) => {
        // setIsLoader(true);
        console.log(err);
      });
  };


  return (
    <>
      {/* {isLoader ? (
        <img src={loaderImage} width="100vw" alt="loader" />
      ) : ( */}
      <Box>
        <Grid container>
          <Grid item md={4}>
            <SMSwitch
              label="ABC"
              onChange={(e) => setCourseStatus(e.target.checked)}
            />
          </Grid>
          <Grid item md={4}>
            <SelectBox
              label="Course"
              onChange={(e) => setModel({ ...model, course: e.target.value })}
              datasource={[
                {
                  id: "wm",
                  fullName: "Web & Mobile",
                },
                {
                  id: "gd",
                  fullName: "Graphic Designing",
                },
              ]}
            />
          </Grid>
          <Grid item md={4}>
            <MyButton
              label={isLoader ? <CircularProgress color='error' /> : "Submit"}
              variant="contained"
              onClick={submitForm}
            /> 
          </Grid>

          <Grid item md={12}>
            <table style={{ border: "1px solid black" }}>
              {resultData.map((e, i) => (
                <tbody>
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.rollNum}</td>
                    <td>{e.marks}</td>
                    <td>{e.result}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </Grid>
        </Grid>
      </Box>
      {/* )} */}
    </>
  );
}

export default CreateResult;
