import Image from 'next/image'

function DayState({ day }: { day: boolean | undefined }) {
  let image: [string, string, number?] = ['/assets/open.svg', 'grey mark', 12]

  if (day === true) image = ['/assets/check.svg', 'green mark', 12]
  if (day === false) image = ['/assets/x.svg', 'red mark', 12]
  const [src, alt, size] = image
  return (
    <div className="flex items-center justify-center h-9">
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  )
}

export default DayState
