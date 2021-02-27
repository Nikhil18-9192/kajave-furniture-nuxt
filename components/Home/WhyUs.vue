<template>
  <div id="whyus">
    <h1 class="heading">Why Us?</h1>
    <img src="/lines_dot.png" alt="" />

    <div class="flex-1">
      <div v-for="(point, index) in points" :key="point.title" class="why-item">
        <div class="left">
          <p>{{ index + 1 }}</p>
        </div>
        <div class="mid">
          <img :src="point.icon" alt="" />
        </div>
        <div class="right">
          <h4>{{ point.title }}</h4>
          <p>{{ point.subtitle }}</p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyUs",
  data() {
    return {
      points: [
        {
          icon: "/ruler.png",
          title: "Personalization",
          subtitle: "Just dream it we make it."
        },
        {
          icon: "/2.png",
          title: "Exclusive Extended Warranty",
          subtitle: "A committed assurance towards all our products."
        },
        {
          icon: "/3.png",
          title: "Delivery Timelines",
          subtitle:
            "We depute strained skilled technician to assemble your dream furniture at your home with utmost care."
        },
        {
          icon: "/4.png",
          title: " Design Solutions",
          subtitle:
            "Complete solutions are provided by our team of well-qualified architects and interior designers. "
        },
        {
          icon: "/5.png",
          title: "Complimentary Installation",
          subtitle:
            "We provide complimentary installation services and are happy to help you to assemble your furniture."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scopped>
#whyus {
  width: 100%;
  padding: 16px 0;
  overflow: hidden;
  background: #9e866a;
  position: relative;
  text-align: center;
  .heading {
    color: #654f36;
    font-weight: 600;
    font-size: 36px;
    text-transform: uppercase;
    margin-top: 32px;
    margin-bottom: 0;
  }

  .flex-1 {
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    @include for-tablet-portrait-up {
      padding-left: 64px;
      max-height: 500px;
    }

    @include for-desktop-up {
      max-height: 428px;
    }

    .why-item {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 16px 0;

      @include for-phone-only {
        width: 100%;
      }

      @include for-tablet-portrait-up {
        width: 50%;
        justify-content: flex-start;
      }

      .left {
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 50%;
        position: relative;
        @include for-phone-only {
          margin: 0 8px;
        }
        p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-style: normal;
          font-weight: bold;
          font-size: 13px;
          text-align: center;
          letter-spacing: 0.05em;
          color: #9e866a;
        }
      }
      .mid {
        width: 15%;
        img {
          object-fit: contain;
        }
      }
      .right {
        width: 50%;
        text-align: left;
        color: #fff;
        padding-left: 16px;

        @include for-tablet-portrait-up {
          width: 65%;
        }

        h4 {
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 0.05em;

          @include for-tablet-portrait-up {
            font-size: 18px;
            margin: 8px 0;
          }
        }

        p {
          font-weight: 300;
          font-size: 11px;
          letter-spacing: 0.05em;

          @include for-tablet-portrait-up {
            font-size: 14px;
            width: 100%;
          }
        }

        hr {
          width: 20px;
          border: none;
          height: 1px;
          background: #ffeed3;
          margin-top: 16px;
        }
      }
    }
  }
}
</style>
