<template>
  <main class="hero">
    <section class="hero__container">
      <h1 class="hero__title">Arpen Technologies</h1>
      <h2 class="hero__subtitle">Las mejores apps y webs del mercado, si, mejor que latevaweb</h2>
      <a class="hero__link" href>Hablamos</a>
    </section>
  </main>
</template>

<script>
import Logo from "~/components/Logo.vue";
import IconLink from "~/components/IconLink.vue";
import {
  Scene,
  PerspectiveCamera,
  AmbientLight,
  WebGLRenderer,
  FogExp2,
  TextureLoader,
  PlaneBufferGeometry,
  MeshLambertMaterial,
  Mesh,
  DirectionalLight,
  PointLight
} from "three";
import {
  TextureEffect,
  BlendFunction,
  BloomEffect,
  KernelSize,
  EffectPass,
  EffectComposer,
  RenderPass
} from "postprocessing";
export default {
  components: {
    Logo,
    IconLink
  },
  methods: {
    init() {
      if (process.client) {
        let scene = new Scene();
        let camera = new PerspectiveCamera(
          60,
          window.innerWidth / window.innerHeight,
          1,
          1000
        );

        let cloudParticles = [];
        let composer;

        camera.position.z = 1;
        camera.rotation.x = 1.16;
        camera.rotation.y = -0.12;
        camera.rotation.z = 0.27;

        let ambient = new AmbientLight(0x555555);
        scene.add(ambient);
        let directionalLight = new DirectionalLight(0xff8c19);
        directionalLight.position.set(0, 0, 1);
        scene.add(directionalLight);

        let orangeLight = new PointLight(0xcc6600, 50, 450, 1.7);
        orangeLight.position.set(200, 300, 100);
        scene.add(orangeLight);
        let redLight = new PointLight(0xd8547e, 50, 450, 1.7);
        redLight.position.set(100, 300, 100);
        scene.add(redLight);
        let blueLight = new PointLight(0x3677ac, 50, 450, 1.7);
        blueLight.position.set(300, 300, 200);
        scene.add(blueLight);

        let renderer = new WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        scene.fog = new FogExp2(0x2c2c2c, 0.001);
        renderer.setClearColor(scene.fog.color);
        let main = document.querySelector(".hero");
        renderer.domElement.style.position = "absolute";
        renderer.domElement.style.top = "0";
        renderer.domElement.style.zIndex = "-1";
        main.appendChild(renderer.domElement);

        let loader = new TextureLoader();
        loader.load("smoke.png", texture => {
          let cloudGeo = new PlaneBufferGeometry(500, 500);
          let cloudMaterial = new MeshLambertMaterial({
            map: texture,
            transparent: true
          });

          for (let p = 0; p < 50; p++) {
            let cloud = new Mesh(cloudGeo, cloudMaterial);
            cloud.position.set(
              Math.random() * 800 - 400,
              500,
              Math.random() * 500 - 500
            );
            cloud.rotation.x = 1.16;
            cloud.rotation.y = -0.12;
            cloud.rotation.z = Math.random() * 2 * Math.PI;
            cloud.material.opacity = 0.55;
            cloudParticles.push(cloud);
            scene.add(cloud);
          }
        });

        loader.load("stars.jpg", texture => {
          const textureEffect = new TextureEffect({
            blendFunction: BlendFunction.COLOR_DODGE,
            texture: texture
          });
          textureEffect.blendMode.opacity.value = 0.2;

          const bloomEffect = new BloomEffect({
            blendFunction: BlendFunction.COLOR_DODGE,
            kernelSize: KernelSize.SMALL,
            useLuminanceFilter: true,
            luminanceThreshold: 0.3,
            luminanceSmoothing: 0.75
          });
          bloomEffect.blendMode.opacity.value = 1.5;

          let effectPass = new EffectPass(camera, bloomEffect, textureEffect);
          effectPass.renderToScreen = true;

          composer = new EffectComposer(renderer);
          composer.addPass(new RenderPass(scene, camera));
          composer.addPass(effectPass);

          window.addEventListener("resize", onWindowResize, false);
          render();
        });

        let onWindowResize = function() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        let render = function() {
          cloudParticles.forEach(p => {
            p.rotation.z -= 0.001;
          });
          composer.render(0.1);
          requestAnimationFrame(render);
        };
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
}
.hero__canvas {
  position: absolute;
  top: 0;
  z-index: -1;
}

.hero__container {
  height: 100vh;
  display: flex;
  padding: 25px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.hero__title {
  color: white;
  font-size: 4rem;
}

.hero__subtitle {
  color: #f2f2f2;
  font-size: 1rem;
  margin-top: 25px;
}

.hero__link {
  padding: 10px;
  border: 1px solid white;
  margin-top: 25px;
  color: white;
  text-decoration: none;
}
</style>
