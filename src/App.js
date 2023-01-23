import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import NamePeriodContainer from './components/NamePeriodContainer/NamePeriodContainer';
import TimeDisplay from './components/TimeDisplay/TimeDisplay';
import TestData from './data.json'

const cleanData = (data, selection) => {
  return data.map(cat => {
    return {
      title: cat.title,
      timeInfo: cat.timeframes[selection]
    }
  })
}


function App() {
  const [currentSelection, setCurrentSelection] = useState('weekly')
  const [timeData, setTimeData] = useState([])


  const handleChangeSelection = (selection) => {
    setCurrentSelection(selection)
  }


  useEffect(() => {
    // const getData = async () => {
    //   try {
    //   const response = await fetch('http://localhost:3001/data')
    //   if (!response.ok) throw new Error('Failed to fetch data.')
    //   const data = await response.json()
    //   setTimeData(cleanData(data, currentSelection))
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }

    // getData()

    setTimeData(cleanData(TestData, currentSelection))
  }, [currentSelection])

  const renderedTimeBlocks = timeData.map(d => {
    return <TimeDisplay key={d.title} type={d.title} currAmt={d.timeInfo.current} prevAmt={d.timeInfo.previous} timePeriod={currentSelection}/>
  })


	return (
		<div className={styles.container}>
      <NamePeriodContainer className={styles.namePerContainer} onChangeSelection={handleChangeSelection}/>
			{renderedTimeBlocks}
		</div>
	);
}

export default App;
