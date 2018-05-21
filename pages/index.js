import {ColorBox} from '../components/color-box'

export default () =>
  <div>
    <ColorBox color='#ffff00' />
    <style jsx global>{`
    body {
      padding: 0;
      margin: 0;
      height: 100vh;
      width: 100vw;
    }
    `}</style>
  </div>
