import { Counter } from './Counter'
import Logo from './logo.svg'
import IMAGE from './react.png'

export const App = () => {
  return (
    <>
      <h1>
        Edited React TypeScript Webpack Starter Template -{' '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width={300} height={200} />
      <Logo />
      <Counter />
    </>
  )
}
