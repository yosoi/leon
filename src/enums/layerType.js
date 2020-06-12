import VolumeIcon from '../components/icons/volumeIcon.js'
import PitchIcon from '../components/icons/pitchIcon.js'

export default Object.freeze({
  VOLUME: 1,
  PITCH: 2,
  properties: {
    1: {
      icon: VolumeIcon(),
      name: "Volume",
      value: 1
    },
    2: {
      icon: PitchIcon(),
      name: "Pitch",
      value: 2
    }
  }
});
