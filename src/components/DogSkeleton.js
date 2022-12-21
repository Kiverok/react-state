import ContentLoader from "react-content-loader"

export const DogSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="252" y="69" rx="2" ry="2" width="182" height="13" /> 
    <rect x="251" y="103" rx="2" ry="2" width="185" height="13" /> 
    <rect x="0" y="60" rx="2" ry="2" width="240" height="240" /> 
    <rect x="256" y="137" rx="2" ry="2" width="185" height="13" />
  </ContentLoader>
)

