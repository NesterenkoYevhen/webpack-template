import { Counter } from './Counter'
import LOGO from './logo.svg'
import IMAGE from './react.png'

export const App = () => {
  const name = 'Vishwasd'

  return (
    <>
      <h1>
        Edited React TypeScript Webpack Starter Template {name} - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width={300} height={200} />
      <img src={LOGO} alt="React Logo" width={300} />
      <Counter />
    </>
  )
}
