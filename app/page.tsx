import {
  ArrowRight,
  Camera,
  Check,
  Download,
  MessageCircle,
  ShieldCheck,
  Users,
} from 'lucide-react'

const previewImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-7hUXWNld4PzNqCzepuuINaueQThI1y.png'

const features = [
  {
    icon: Camera,
    number: '01',
    title: 'Лови момент',
    description: 'Получай случайные задания и доказывай, что успел выполнить их вовремя.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Играй вместе',
    description: 'Добавляй друзей, соревнуйся в челленджах и открывай новые профили.',
  },
  {
    icon: MessageCircle,
    number: '03',
    title: 'Будь на связи',
    description: 'Обсуждай задания в личных переписках и делись своими победами.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9ff] text-[#17121f]">
      <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="SnapDare — на главную">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-Ko1QUi3Zq2TX5GNwbHwUpKn3K4O4FV.png"
            alt="Логотип SnapDare"
            className="size-10 rounded-[14px] object-cover shadow-[0_8px_22px_rgba(91,32,232,0.18)]"
          />
          <span className="text-xl font-black tracking-[-0.04em]">SnapDare</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-[#756c83] md:flex">
          <a className="transition-colors hover:text-[#5b20e8]" href="#how-it-works">Как это работает</a>
          <a className="transition-colors hover:text-[#5b20e8]" href="#features">Возможности</a>
          <a className="transition-colors hover:text-[#5b20e8]" href="#download">Скачать</a>
        </div>
        <a href="#download" className="inline-flex items-center gap-2 rounded-full bg-[#17121f] px-4 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
          Скачать APK <ArrowRight className="size-4" />
        </a>
      </nav>

      <section id="top" className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-32 lg:pt-20">
        <div className="relative z-10">
          <h1 className="max-w-xl text-[clamp(3.4rem,8vw,6.7rem)] font-black leading-[0.88] tracking-[-0.075em]">
            Сделай.
            <br />
            <span className="bg-gradient-to-r from-[#7827ed] via-[#5f20ed] to-[#a42af1] bg-clip-text text-transparent">Успей.</span>
            <br />
            Поделись.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-8 text-[#756c83]">
            SnapDare — социальная игра, которая превращает обычный день в серию неожиданных фото-заданий. Время пошло.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#download" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6421ed] px-6 py-4 font-bold text-white shadow-[0_14px_28px_rgba(100,33,237,0.25)] transition-all hover:-translate-y-1 hover:bg-[#5214d5]">
              <Download className="size-5" /> Скачать для Android
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#ded8e8] bg-white px-6 py-4 font-bold text-[#31273d] transition-colors hover:border-[#bda4f7] hover:text-[#6421ed]">
              Узнать больше <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative min-h-[470px] lg:min-h-[620px]">
          <div className="absolute -right-24 top-0 size-[470px] rounded-full bg-[#e7d9ff] blur-2xl lg:size-[640px]" />
          <div className="absolute -right-16 top-8 rotate-[5deg] overflow-hidden rounded-[34px] border-[10px] border-[#17121f] bg-[#17121f] shadow-[0_30px_70px_rgba(70,31,130,0.24)] lg:right-3 lg:top-5">
            <div className="h-[395px] w-[218px] overflow-hidden rounded-[24px] bg-white lg:h-[552px] lg:w-[305px]">
              <img src={previewImage} alt="Превью экранов приложения SnapDare" className="h-full w-full object-cover object-left" />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-[#ece7f4] bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div><p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#6d28e9]">Правила простые</p><h2 className="max-w-lg text-4xl font-black tracking-[-0.05em] sm:text-5xl">Три шага до новой истории</h2></div>
            <p className="max-w-sm text-[#756c83]">Никаких сложных правил. Только ты, камера и немного смелости.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, number, title, description }) => <article key={number} className="group rounded-[28px] border border-[#eee9f6] bg-[#fbfaff] p-7 transition-all hover:-translate-y-1 hover:border-[#d6c2ff] hover:shadow-[0_18px_35px_rgba(80,38,160,0.08)]"><div className="mb-12 flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-[#6826e8] text-white"><Icon className="size-5" /></span><span className="text-sm font-black text-[#c8bdd7]">{number}</span></div><h3 className="mb-3 text-xl font-black">{title}</h3><p className="leading-7 text-[#756c83]">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#6120e5] to-[#a22af0] p-8 text-white sm:p-12"><div className="absolute -right-20 -top-20 size-64 rounded-full border-[32px] border-white/10" /><div className="absolute -bottom-28 -left-12 size-56 rounded-full border-[26px] border-white/10" /><p className="relative mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#dfcaff]">Всё в одном месте</p><h2 className="relative max-w-md text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl">Твоя компания. Твои правила. Твои dare.</h2><div className="relative mt-10 grid gap-4 text-sm"><div className="flex items-center gap-3"><Check className="size-5 rounded-full bg-white/20 p-1" /> Быстрые фото-задания</div><div className="flex items-center gap-3"><Check className="size-5 rounded-full bg-white/20 p-1" /> Личные переписки и профили</div><div className="flex items-center gap-3"><Check className="size-5 rounded-full bg-white/20 p-1" /> Уведомления о новых вызовах</div></div></div>
          <div><p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#6d28e9]">Создано для движения</p><h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">Каждый день может стать игрой.</h2><p className="mt-6 text-lg leading-8 text-[#756c83]">SnapDare помогает чаще замечать детали вокруг, знакомиться с людьми и сохранять моменты, которые не хочется забывать.</p></div>
        </div>
      </section>

      <section id="download" className="px-6 pb-20 lg:px-8 lg:pb-28"><div className="mx-auto max-w-6xl overflow-hidden rounded-[34px] bg-[#17121f] px-7 py-12 text-center text-white sm:px-14 sm:py-16"><ShieldCheck className="mx-auto mb-5 size-8 text-[#bc91ff]" /><h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">Готов к своему первому dare?</h2><p className="mx-auto mt-4 max-w-lg text-[#bcb3c8]">Скачай SnapDare для Android и присоединяйся к игре, где всё может измениться за 60 секунд.</p><a href="/downloads/snapdare.apk" download="snapdare.apk" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-black text-[#5b20e8] transition-transform hover:-translate-y-1"><Download className="size-5" /> Скачать APK <span className="text-xs font-semibold text-[#8c7aa5]">v1.0.0</span></a><p className="mt-4 text-xs text-[#80758d]">Android 8.0 и выше · Бесплатно</p></div></section>

      <footer className="border-t border-[#ece7f4] px-6 py-7 lg:px-8"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#8d8497] sm:flex-row"><span className="font-black text-[#31273d]">SnapDare</span><span>Сделай момент запоминающимся.</span><span>© 2026 SnapDare</span></div></footer>
    </main>
  )
}
