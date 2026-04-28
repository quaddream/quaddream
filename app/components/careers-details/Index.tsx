import CareerDetailsMain from "./sections/CareerDetailsMain";  
import JobDetails from "./sections/JobDetails"; 
import { careerType } from "../careers/type";
const Index = ({data}:{data:careerType['careers'][number]}) => {
  return (
    <> 
      <CareerDetailsMain  title={data.firstSection.title} /> 
      <JobDetails 
      firstSection={data.firstSection} 
      secondSection={data.secondSection}
      thirdSection={data.thirdSection}
      fourthSection={data.fourthSection} />
    </>
  );
};

export default Index;
