import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="flex h-[92px] w-full items-center justify-between bg-white px-[32px] text-[18px] font-semibold dark:bg-[#131313] dark:text-gray-200 lg:px-[112px] lg:text-[22px]">
      <h2>
        CA Gustavo <span class="text-yellow-400">⚡</span> ©{' '}
        {new Date().getFullYear()}{' '}
      </h2>
      <section class="flex gap-8">
        <a target="_blank" href="https://twitter.com/gustavocadev">
          <svg
            width={24}
            height={24}
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"
              stroke="currentColor"
              stroke-line-cap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a target="_blank" href="https://github.com/gustavocadev">
          <svg
            width={24}
            height={24}
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
              stroke="currentColor"
              stroke-line-cap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
              stroke="currentColor"
              stroke-line-cap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a target="_blank" href="https://www.facebook.com/gustavocadev">
          <svg
            width={24}
            height={24}
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
              stroke="currentColor"
              stroke-line-cap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </section>
    </footer>
  );
});
