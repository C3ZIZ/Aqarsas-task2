import Sidebar from './components/SideBar'

function App() {
  return (
    <div className="appShell" dir="rtl">
      <Sidebar />
      <main className="mainContent">
        {/* rest of the app */}
      </main>
    </div>
  )
}

export default App
