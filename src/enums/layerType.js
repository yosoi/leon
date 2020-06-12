import PitchIcon from '../components/icons/pitchIcon.js'
import PitchLayer from '../layers/pitchLayer.js'
import VolumeIcon from '../components/icons/volumeIcon.js'
import VolumeLayer from '../layers/volumeLayer.js'

export default Object.freeze({
  VOLUME: 1,
  PITCH: 2,
  properties: {
    1: {
      icon: VolumeIcon(),
      instance: () => new VolumeLayer(),
      name: "Volume",
      value: 1
    },
    2: {
      icon: PitchIcon(),
      instance: () => new PitchLayer(),
      name: "Pitch",
      value: 2
    }
  }
});
