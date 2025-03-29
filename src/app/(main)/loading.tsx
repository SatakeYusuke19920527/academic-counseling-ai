const Loading = () => {
  return(
      <div className="flex justify-center items-center gap-6 mt-10">
          <div className="h-10 w-10 animate-spin border-[10px] border-gray-400 rounded-full  border-t-transparent"></div>
          <div><p className="text-[30px] font-weight">Loading</p></div>
      </div>
  )
}

export default Loading;