


interface Props{
    error?: string;
}

export const Error = ({error}:Props) => {
  return (
    <p className="bg-red-500 px-2 py-1 text-center text-white font-bold text-sm my-2 rounded-md">{error}</p>
  )
}

export default Error