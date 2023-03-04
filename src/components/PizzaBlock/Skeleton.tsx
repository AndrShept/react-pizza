import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton:React.FC = () => (
  <ContentLoader 
  className='pizza-block'
  speed={2}
  width={280}
  height={466}
  viewBox="0 0 280 466"
  backgroundColor="#f0f0f0"
  foregroundColor="#d9d9d9"
  
>
  <circle cx="137" cy="134" r="131" /> 
  <rect x="17" y="277" rx="10" ry="10" width="242" height="21" /> 
  <rect x="17" y="318" rx="10" ry="10" width="242" height="67" /> 
  <rect x="18" y="402" rx="10" ry="10" width="77" height="49" /> 
  <rect x="115" y="401" rx="10" ry="10" width="142" height="49" />
  </ContentLoader>
)

