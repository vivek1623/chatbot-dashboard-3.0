import { ConfigProvider, Button } from "antd"

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <Button type="primary">Hello</Button>
    </ConfigProvider>
  )
}

export default App
