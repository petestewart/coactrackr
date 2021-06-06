import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";

import { SettingsContext } from "./SettingsProvider";

import SettingsSidebar from "./SettingsSidebar";





import {
  makeStyles,

} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


const CertSettings = ({ userId, ...props }) => {
  const { getCertSettings, updateCertSettings } =
    useContext(SettingsContext);

  const [certSettings, setCertSettings] = useState({
  });

  const classes = useStyles();

  const history = useHistory();

  const handleChange = (e) => {
    setCertSettings({
      ...certSettings,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   getCertSettings().then((res) => {
  //     setCertSettings(res);
  //   });
  // }, []);


  return (
    <>
      <SettingsSidebar />
      <div className="main-content">
        <div className="settings">
          <div style={props.style} className={props.classes}>
            
            <h2>CCEU Settings</h2>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default CertSettings;
