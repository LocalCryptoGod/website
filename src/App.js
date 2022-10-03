import logo from './images/logo.png';
import './App.css';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App v">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typewriter
          options={{
            strings: ['Hello, Welcome to the world of LocalCryptoGod', 'Some cool shit is about to happen'],
             autoStart: true,
             loop: true,
          }}
        />
        <a
          className="App-link"
          href="https://twitter.com/localcryptogod"
          target="_blank"
          rel="noopener noreferrer"
        >
          LocalCryptoGod
        </a>
        <div id="info">This is where the cool stuff goes<br></br>Some of my favorite NFTs</div>
        <div class="row">
          <div class="column">
            <img src="https://www.nuclearnerds.io/api/image/8976/"></img>
            <img src="https://goatgauds.s3.us-west-1.amazonaws.com/images/staked/120.png"></img>
            <img src="https://go.fission.app/json/1904/image.jpg"></img>
            <img src="https://i.seadn.io/gae/98bKqqpPgq1TOLcFhF7dL-f8ELksPLfOCmEu7WUEaDmwBPWF5fg7w3x_QgxyjxXZ0S9hwMRUj_N8inuJt4_bLwYPFZwl9kOYUQ0N2g?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/4B1i8TadCj3zIl76WYv9070NZhF7JxG2vXsloc8ZrVfqNUslyx2TMO1DDf-Sx0y-6bxjTt62gtPgBmgg1LI9O4_CDjEb0vkPBZ-gKg?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/JwAndSbrZtHVmPMj20ksE6SV0bgqtKvCQ-Uq9OBcjuSKd3yV7Qk3gkvbT35zn7bOW4qrjtSBQXGsgOvIj-qZG_TNugWtt0AJgp2tvQ?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/druYshnPwvyo1huLsvuT4IzsuuunxauErrOpcnZP-9H4MARPT1KT6WVgQye3W-n7WSzycJu_7CxnL97Fg8HOBc0LlXqbYlqnXc8YKA?auto=format&w=384"></img>
          </div>
          <div class="column">
            <img src="https://8thwonders.io/image/?tokenId=1043"></img>
            <img src="https://storage.googleapis.com/angry-meerkats/images/5068.png"></img>
            <img src="https://i.seadn.io/gae/iRyoq6IZGf4k0Gci-E9f5r19BaO0XuGg6AV9RQJMKQIe03YIMqSJAe5iCJpS4unbJubTUykETeBdty3XQgsp4uXlL0VWkzXT2BGt?auto=format&w=1920"></img>
            <img src="https://i.seadn.io/gae/jxt_Eyv7lCrYECsRD9lEY98DeRPeiEMsKHKkOeaXNuVwGztlhjcmQMHv6PLDCLYIBlQ-VkE3tkS3ggt6pdK9B3Zss5KrQR3W0aIFFQ?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/V5q9GCa5Ecdgiviv7lJEaljHCcXDAkqlciJ0-P3XLUppay0gloxkRVkTftCyzUsDIE1loSLysedRSzbBeAPIrU1t7TmgWXB-5mRuwqY?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/dbZvuOYPcwM2qcIH-8X04JDduef9EmLIQVWzQitEOoli8Eef1d32mWnE-lbJDh9RrTzrcRvF-Gm3iSg3dHiMCqeYI9BAFCrq5npisg?auto=format&w=384"></img>
          </div>
          <div class="column">
            <img src="https://i.seadn.io/gae/hLhAyxhv52gSI2Q-0zlEAQe5RxeJAmRW4ogA_MbdPVBEf-NVFhlfNocixL6Facs9GkbR-Sk3ECwVxvwwQpLPiMukDrjNGAOo8KN8?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/VShjh6FzKskfpEzyu0FYUYTAuHKDVfj1wqk-I7sDKaghyLsdtfb81IgPKimPIgf6VCM0dqwrdZIVqshOdKHXh1XOebYa_5KuX2A7tQ?auto=format&w=1000"></img>
            <img src="https://i.seadn.io/gae/wO4d7ieTk7XIcKt2ewSCQOqFmw9mo6QyK9EjkbmAeXuRyZUSVV-n9_3hmCWIszJatP8XNORu9CwmRmFDVReIe0D-xMSM9XK8pueqVw?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/gpHDC5vl2ewA-_1FMY3pZ6mMsVTeWyDJ50z4QlKLYOkVpA5v0Gqb3Q_GtKLdT8jCxVCGxLbIU1lKNFB2H4HhanS7JmWkJ6htih6jAso?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/hFJrC035sePr4IU1_1geMpCAnI7xmhFQ-7nHCASkDPclNydJ0CyJcblsNU8N4YY3kSwu-oDSi-1TTjv7j-1cpa65yVlpXvGMj-pgaA?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/Ss7wEjX-Fag1Ch-q7B1Jrrahl48kQnYAuOH7GOuL7QavpGIh8SS9eehsxFhGxgfgBEFV8LQycuv0OCFJ2wG-HPDgdDe6g9hD6UL5Gw?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/nOLSaPWE7SNwrFRL5RL9K00PjQWF8vTGeGPivwZG4iMktX5LLhjrVI_s_nSy6Y1kUExu1tgjExxj_dSWaQgCHoc8xwLsUQhG5LifD4U?auto=format&w=384"></img>
          </div>
          <div class="column">
            <img src="https://i.seadn.io/gae/C7rUV3xXjp71KunGa4BFdBLJv4e3d9O3jk_SGXplGHt4PQw0OqExtzo7NKyFt_C3ElJ8LRnsRuvmsxJ4XmEyxhMaKjMXzi6VQRJE?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/GKM9t3D32kwGNw6Wkf_S7jWla5TvFQo6Y9Vzv_ou5bGMm91U9UEtj4L85wgo2iz6iiRFJsS4oNEpcJ1ejPADqRwrf-G5V2Lxm85V?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/O5bfXdQEBVV-97t0vdajfLRn25jj-sSRH-SWeG1huxRYi5MbK6xA4zrGNeJ9i4cz_xgdh56Aok6z5F9So2XmQTKXJd17Yod5n-q0nQ?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/_sfj4IvjwcjW77Qy67sMNeRK2N-5IUcqrujClBeHHHgqtumJadFwIyR3lQ7WiTxa3kApVSodz6vhW9t2SoxrioIspFyBruKpsOmvzQ?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/lvjEZNkQC22bhOZglsOHrItMzOdf0ctBRv1-EAbvWi0FzmCYvmJdNbMReK-onOEisN2WQdQ81l4hjddX_Fa_5caB2S4tF3lpaSAF?auto=format&w=384"></img>
            <img src="https://i.seadn.io/gae/ShM_gfvKdhf1PL3rnvsOcuN-nL3z1GuUcgA7wwcZeyudZXGxjvf6kUeTYbkaPO_WCbKcruNePFjp-WUzwjCixzVb52aHOsm_ckMDsQ?auto=format&w=384"></img>
          </div>
        </div> 
        </header>
    </div>
  );
}


export default App;
