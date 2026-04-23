import CareerDetailsMain from "./sections/CareerDetailsMain";  
import JobDetails from "./sections/JobDetails";
import { bannersection, sampleCareerData } from "./data"; 
const Index = () => {
  return (
    <> 
      <CareerDetailsMain  bannerData={bannersection.data[0]} /> 
      <JobDetails data={sampleCareerData} />
      
    </>
  );
};

export default Index;
