import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="120" r="120" /> 
    <rect x="0" y="258" rx="0" ry="0" width="280" height="28" /> 
    <rect x="0" y="308" rx="8" ry="8" width="280" height="88" /> 
    <rect x="0" y="419" rx="10" ry="10" width="92" height="27" /> 
    <rect x="124" y="409" rx="20" ry="20" width="155" height="46" />
  </ContentLoader>
)

export default Skeleton