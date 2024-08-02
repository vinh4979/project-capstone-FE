import useRouterElement from './useRouterElement'

export default function App() {
  const routeElement = useRouterElement()
  return <div>{routeElement}</div>
}
