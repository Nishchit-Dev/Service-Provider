const services = [
  {
    description:
      "Our skilled technicians specialize in repairing and maintaining a wide range of household appliances, ensuring they function efficiently and reliably.",
    id: "65ea366293ef4b7f14774e3d",
    name: "Appliances",
    img: "https://www.shutterstock.com/image-photo/working-man-plumber-repairs-washing-600nw-1051194281.jpg",
  },
  {
    description:
      "From installations to troubleshooting, our certified electricians offer comprehensive electrical services to keep your home safe and powered up.",
    id: "65ea369a93ef4b7f14774e3e",
    name: "Electrical",
    img: "https://craneelectric.com/wp-content/uploads/2019/09/hero-home-about.jpg",
  },
  {
    description:
      "Our experienced plumbers provide solutions for all plumbing needs, including repairs, installations, and maintenance, ensuring proper functioning of your water and drainage systems.",
    id: "65ea36b393ef4b7f14774e3f",
    name: "Plumbing",
    img: "https://www.sunshineplumbingandgas.com/wp-content/uploads/2022/08/plumber-working.jpg",
  },
  {
    description:
      "Sit back and relax while our professional cleaners transform your living space into a spotless sanctuary, using eco-friendly products and meticulous attention to detail.",
    id: "65ea36ec93ef4b7f14774e40",
    name: "Home Cleaning",
    img: "https://www.clean-organized-family-home.com/images/house-cleaning-service-19.jpg",
  },
  {
    description:
      "Unlock your full potential with personalized tutoring covering a wide range of subjects and academic levels.",
    id: "65ea370e93ef4b7f14774e41",
    name: "Tutoring",
    img: "https://livelymindstutoring.com/wp-content/uploads/2018/02/Tutoring-picture.jpeg",
  },
  {
    description:
      "Leave the heavy lifting to us! Our efficient team offers expert packing, moving, and unpacking services to make your relocation seamless and stress-free.",
    id: "65ea375293ef4b7f14774e42",
    name: "Packaging and Moving",
    img: "https://www.firemenmovers.com/wp-content/uploads/2016/12/hiring-professional-movers.jpg",
  },
  {
    description:
      "Whether it's a hardware issue or software glitch, our skilled technicians are equipped to diagnose and repair all your computer woes, getting you back online in no time.",
    id: "65ea377a93ef4b7f14774e43",
    name: "Computer Repair",
    img: "https://www.onlinedegree.com/wp-content/uploads/2016/11/computer_repair_technician.jpg",
  },
  {
    description:
      "Enhance the beauty and functionality of your home with our professional repair and painting services, tackling everything from minor fixes to complete renovations.",
    id: "65ea379e93ef4b7f14774e44",
    name: "Home Repair and Painting",
    img: "https://t4.ftcdn.net/jpg/06/42/11/15/360_F_642111512_nugAHlLP6AOVe6psj6ENA7fwxZsh5ZlO.jpg",
  },
  {
    description:
      "Say goodbye to unwanted guests with our effective pest control solutions, designed to rid your home of pests while minimizing environmental impact and ensuring the safety of your family.",
    id: "65ea37e193ef4b7f14774e45",
    name: "Pest Control",
    img: "https://hybridpestcontrol.com/storage/2021/07/Commercial-and-Residential-Pest-control-UT-hybridpestcontrol-scaled.jpeg",
  },
];

export const ImgFromId = (id: string) => {
  let ImgSrc = "";
  const img = services.map((data, i) => {
    if (data.id == id) {
      ImgSrc = data.img;
    }
  });
  return ImgSrc || services[0].img;
};

export default services;
