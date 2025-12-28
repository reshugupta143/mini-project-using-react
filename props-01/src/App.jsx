import React from 'react'

import Card from './componant/card'

const App = () => {
 const arr = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/055/210/890/non_2x/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png",
    companyName: "Meta",
    dateHosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.shutterstock.com/image-vector/amazon-logo-editorial-icon-isolated-600nw-2333488123.jpg",
    companyName: "Amazon",
    dateHosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 60,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s",
    companyName: "Apple",
    dateHosted: "7 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: 50,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940",
    companyName: "Netflix",
    dateHosted: "12 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 70,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/1000v/48/30/google-logo-symbol-vector-46334830.jpg",
    companyName: "Google",
    dateHosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 55,
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.logodesignlove.com/wp-content/uploads/2012/08/microsoft-logo-02.jpeg",
    companyName: "Microsoft",
    dateHosted: "8 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 75,
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p@2x.png",
    companyName: "NVIDIA",
    dateHosted: "6 days ago",
    post: "AI Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 80,
    location: "Bangalore, India"
  },
  
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNPRQuLPpKrjO5bdFPgVGRoAbysq635o6ZQ&s",
    companyName: "Adobe",
    dateHosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: 40,
    location: "Delhi, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcNaEz4owVSlJ7ewSueAgrxiuLc7QCm719Q&s",
    companyName: "Oracle",
    dateHosted: "11 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 65,
    location: "Chennai, India"
  }
];

  return (
    <div className='parent'>
     
      {arr.map(function(elem){
        return <Card brandLogo={elem.brandLogo} companyName={elem.companyName} dateHosted={elem.dateHosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} payPerHour={elem.payPerHour} location={elem.location} />
      })}
    </div>
  )
}

export default App
