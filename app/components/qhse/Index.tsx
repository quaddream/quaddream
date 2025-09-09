import React from "react";
import {
  environmentalData,
  certificationData,
} from "./data";
import BannerInner from "../common/BannerInner";
import QHSECommitment from "./sections/QhseCommit";
import HealthSafety from "./sections/HealthandSafety";
import Environment from "./sections/Environment";
import Certification from "./sections/Certification";
import { QhseData } from "./type";

const Index = ({ data }: { data: QhseData }) => {
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <QHSECommitment qhseData={data} />
      <HealthSafety safetyData={data.thirdSection} />
      <Environment environmentalData={environmentalData} />
      <Certification certificationData={data.fifthSection} />
    </>
  );
};

export default Index;
