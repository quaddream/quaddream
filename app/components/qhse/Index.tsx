import React from "react";
import {bannersection,safetyData,environmentalData,certificationData, qhseContent} from "./data";
import BannerInner from "../common/BannerInner";
import QHSECommitment from "./sections/QhseCommit";
import HealthSafety from "./sections/HealthandSafety";
import Environment from "./sections/Environment";
import Certification from "./sections/Certification";

const Index = () => {
  return (
    <>
      <BannerInner bannerData={bannersection.data} />
      <QHSECommitment qhseData={qhseContent}/> 
      <HealthSafety safetyData={safetyData}/>
      <Environment environmentalData={environmentalData}/>  
      <Certification certificationData={certificationData}/>
    </>
  );
};

export default Index;
