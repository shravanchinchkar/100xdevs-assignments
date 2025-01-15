export default function BusinessCard({ userData }) {
  return (
    <div>
      {userData.map((item) => {
        return (
          <div className="m-[1rem] p-[1rem] border-[2px] rounded-lg max-w-[400px] flex flex-col gap-[1rem] bg-[#f8f9fa] shadow-[0 4px 8px rgba(0, 0, 0, 0.1)]">
            <p className="font-bold text-[#333] uppercase text-[24px]">
              {item.name}
            </p>
            <p className="text-[#555] text-[15px]">{item.description}</p>
            <p className="font-bold text-[#333] text-[18px] uppercase text-md">
              Interest
            </p>
            <ul className="ml-[0.5rem] text-gray-500">
              {item.interest.map((item) => {
                return <li className="text-[14px] text-[#555]">{item}</li>;
              })}
            </ul>
            <div className="flex gap-[1rem]">
              {item.socialMedia.map((item) => {
                return (
                  <a href={`https://www.${item}.com/`} target="_blank" className="p-[0.5rem] text-white bg-[#007BFF] shadow-[0 2px 4px rgba(0, 0, 0, 0.1)] rounded-md">
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
