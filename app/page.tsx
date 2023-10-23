import Image from 'next/image'
import DayState from '@/components/DayState'
import Link from 'next/link'

interface WeekDays {
  weekDay: string
  codeDay: number
}

export default function Home() {
  const habits = {
    'beber água': {
      '2023-10-11': true,
      '2023-10-10': false,
      '2023-10-09': false,
    },
    'fazer exercícios': {
      '2023-10-11': false,
      '2023-10-10': false,
      '2023-10-09': true,
    },
  }

  const today = new Date()
  const todayWeekDay = today.getDay()
  const weekDays: WeekDays[] = [
    {
      weekDay: 'Dom',
      codeDay: 0,
    },
    {
      weekDay: 'Seg',
      codeDay: 1,
    },
    {
      weekDay: 'Ter',
      codeDay: 2,
    },
    {
      weekDay: 'Qua',
      codeDay: 3,
    },
    {
      weekDay: 'Qui',
      codeDay: 4,
    },
    {
      weekDay: 'Sex',
      codeDay: 5,
    },
    {
      weekDay: 'Sáb',
      codeDay: 6,
    },
  ]

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-3xl font-light text-white font-display text-center ">
            Você não tem hábitos cadastrados
          </h1>
        ))}
      {habits !== null &&
        Object.entries(habits).map(([habit]) => (
          <div key={habit} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-ligth text-white font-sans">
                {habit}
              </span>
              <button>
                <Image
                  src="/assets/trash.svg"
                  width={20}
                  height={20}
                  alt="icone de lixeira vermelha"
                />
              </button>
            </div>
            <section className="grid grid-cols-7 bg-slate-900 rounded-md">
              {weekDays.map((day) => (
                <div
                  key={day.codeDay}
                  className={`flex flex-col pt-2 ${
                    day.codeDay === todayWeekDay && 'bg-slate-800 rounded-md'
                  }`}
                >
                  <span
                    className={`font-sans text-xs text-center ${
                      day.codeDay === todayWeekDay
                        ? 'text-[#45EDAD]'
                        : 'text-white '
                    }`}
                  >
                    {day.weekDay}
                  </span>
                  <DayState day={undefined} />
                </div>
              ))}
            </section>
          </div>
        ))}

      <Link
        href="new_habit"
        className="fixed text-center bottom-10 w-2/3 
        left-1/2 -translate-x-1/2 text-slate-900 bg-[#45EDAD] font-display font-regular 
        text-2xl p-2 rounded-md "
      >
        novo hábito
      </Link>
    </main>
  )
}
