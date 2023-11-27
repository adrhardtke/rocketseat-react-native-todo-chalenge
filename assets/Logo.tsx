import * as React from "react"
import Svg, { Path, ClipPath, G, Defs } from "react-native-svg"

const Logo = () => (
  <Svg
    width={111}
    height={32}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        fill="#4EA8DE"
        d="M43.398 6.448v5.038H30.667V6.448h12.731ZM33.132 1.814h6.945v17.758c0 .268.046.495.138.68.092.176.235.31.428.403.193.084.44.126.742.126.21 0 .453-.025.73-.076.285-.05.495-.092.629-.126l1.006 4.887c-.31.092-.754.206-1.333.34-.57.134-1.25.223-2.038.264-1.594.084-2.931-.08-4.013-.49-1.082-.42-1.896-1.08-2.441-1.978-.545-.898-.81-2.024-.793-3.375V1.814ZM55.334 26.146c-2.097 0-3.892-.416-5.385-1.247a8.57 8.57 0 0 1-3.434-3.501c-.797-1.503-1.195-3.245-1.195-5.227 0-1.981.398-3.72 1.195-5.214a8.47 8.47 0 0 1 3.434-3.501c1.493-.84 3.288-1.26 5.385-1.26s3.892.42 5.385 1.26a8.47 8.47 0 0 1 3.434 3.501c.797 1.495 1.195 3.233 1.195 5.214 0 1.982-.398 3.724-1.195 5.227a8.57 8.57 0 0 1-3.434 3.501c-1.493.831-3.288 1.247-5.385 1.247Zm.05-5.138a2.17 2.17 0 0 0 1.523-.592c.427-.395.759-.958.994-1.688.234-.73.352-1.6.352-2.607 0-1.016-.118-1.885-.352-2.607-.235-.73-.567-1.293-.994-1.688a2.17 2.17 0 0 0-1.523-.592c-.62 0-1.153.198-1.597.592-.445.395-.785.957-1.02 1.688-.234.722-.352 1.59-.352 2.607 0 1.008.118 1.877.353 2.607.234.73.574 1.293 1.019 1.688.444.394.977.592 1.597.592Z"
      />
      <Path
        fill="#5E60CE"
        d="M75.182 26.045a7.04 7.04 0 0 1-3.8-1.083c-1.148-.722-2.071-1.818-2.767-3.287-.688-1.47-1.032-3.32-1.032-5.554 0-2.334.36-4.232 1.082-5.693.73-1.46 1.67-2.531 2.818-3.211 1.158-.68 2.374-1.02 3.649-1.02.956 0 1.794.167 2.516.503a5.273 5.273 0 0 1 1.811 1.323 5.838 5.838 0 0 1 1.107 1.8h.101V0h6.945v25.793h-6.895V22.62h-.15a5.542 5.542 0 0 1-1.158 1.763 5.43 5.43 0 0 1-1.812 1.222c-.704.293-1.51.44-2.415.44Zm2.566-5.34c.638 0 1.183-.184 1.636-.554.461-.378.813-.907 1.057-1.587.251-.688.377-1.503.377-2.443 0-.957-.126-1.776-.377-2.456-.244-.688-.596-1.213-1.057-1.574-.453-.37-.998-.554-1.636-.554-.637 0-1.182.184-1.635.554-.445.36-.788.886-1.032 1.574-.235.68-.352 1.499-.352 2.456 0 .957.117 1.78.352 2.468.243.68.587 1.205 1.032 1.575.453.36.998.541 1.635.541ZM100.331 26.146c-2.097 0-3.892-.416-5.385-1.247a8.57 8.57 0 0 1-3.434-3.501c-.797-1.503-1.196-3.245-1.196-5.227 0-1.981.399-3.72 1.196-5.214a8.47 8.47 0 0 1 3.434-3.501c1.493-.84 3.288-1.26 5.385-1.26 2.096 0 3.891.42 5.384 1.26a8.472 8.472 0 0 1 3.435 3.501c.796 1.495 1.195 3.233 1.195 5.214 0 1.982-.399 3.724-1.195 5.227a8.572 8.572 0 0 1-3.435 3.501c-1.493.831-3.288 1.247-5.384 1.247Zm.05-5.138a2.17 2.17 0 0 0 1.522-.592c.428-.395.759-.958.994-1.688s.352-1.6.352-2.607c0-1.016-.117-1.885-.352-2.607-.235-.73-.566-1.293-.994-1.688a2.17 2.17 0 0 0-1.522-.592c-.62 0-1.153.198-1.598.592-.444.395-.784.957-1.019 1.688-.235.722-.352 1.591-.352 2.607 0 1.008.117 1.877.352 2.607.235.73.575 1.293 1.02 1.688.444.394.976.592 1.597.592Z"
      />
      <G clipPath="url(#b)">
        <Path
          fill="#4EA8DE"
          d="M9.761 2.681a19.52 19.52 0 0 1 4.193 12.31v1.062l.913.556a5.709 5.709 0 0 1 2.48 3.126c-.368-.272-.754-.52-1.154-.744l-2.436-1.37-.437 2.764a7.036 7.036 0 0 1-.152.725H6.343a11.643 11.643 0 0 1-.26-.95l-.552-2.5-2.245 1.25c-.376.21-.738.441-1.085.694a5.938 5.938 0 0 1 2.442-3.126l.869-.557v-.987A20.011 20.011 0 0 1 9.768 2.68H9.76Zm.007-2.6a.595.595 0 0 0-.387.143l-.057.05a21.926 21.926 0 0 0-5.709 14.654A7.79 7.79 0 0 0 .37 19.16a7.672 7.672 0 0 0 .264 5.3 8.605 8.605 0 0 1 3.603-3.901c.16.68.371 1.347.634 1.994a.587.587 0 0 0 .21.314c.104.08.23.123.361.124h8.804c.177 0 .355-.169.444-.431.257-.616.435-1.26.533-1.92a8.536 8.536 0 0 1 3.602 3.901 7.47 7.47 0 0 0 .331-5.313 7.586 7.586 0 0 0-3.3-4.214A21.446 21.446 0 0 0 10.2.275.59.59 0 0 0 9.761.08h.007Z"
        />
        <Path
          fill="#4EA8DE"
          d="M9.762 14.409c-.488 0-.964-.143-1.37-.409a2.44 2.44 0 0 1-.908-1.088 2.4 2.4 0 0 1 .526-2.648 2.5 2.5 0 0 1 2.682-.54c.452.182.838.49 1.112.888.273.398.421.866.425 1.346a2.34 2.34 0 0 1-.664 1.692 2.404 2.404 0 0 1-1.683.734.387.387 0 0 1-.12 0v.025Z"
        />
        <Path
          fill="#5E60CE"
          d="M13.193 24.548a1.21 1.21 0 0 0-.864.327 1.175 1.175 0 0 0-.367.836V29.4c0 .322.13.63.36.858a1.24 1.24 0 0 0 1.741 0c.23-.227.36-.536.36-.858v-3.638a1.16 1.16 0 0 0-.329-.849 1.194 1.194 0 0 0-.844-.364h-.057ZM6.343 24.548a1.22 1.22 0 0 0-.885.317 1.188 1.188 0 0 0-.384.846V29.4c0 .322.13.63.36.858a1.24 1.24 0 0 0 1.74 0c.232-.228.361-.536.361-.858v-3.638a1.16 1.16 0 0 0-.329-.849 1.192 1.192 0 0 0-.844-.364h-.02ZM9.673 24.548a1.22 1.22 0 0 0-.86.33 1.189 1.189 0 0 0-.37.833v5.083c0 .321.129.63.36.857a1.24 1.24 0 0 0 1.74 0c.23-.227.36-.536.36-.857v-5.002a1.16 1.16 0 0 0-.329-.848 1.192 1.192 0 0 0-.844-.364l-.057-.032Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h110.345v32H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M0 .08h19.485V32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Logo
