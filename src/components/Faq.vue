<template id="faq">
    <div class="faq">
        <div class="faq__questions">
            <div class="faq__questions__question1">
                <span class="faq__questions__question__text1">What is this emerging... um... art form?</span>
                <img class="faq__questions__question__img1" src="../assets/faq/plus.svg" alt="question" />
                <div class="faq__questions__question__rectangle1"></div>
            </div>
            <div class="faq__questions__question2">
                <span class="faq__questions__question__text2">Ok, so The Foxy Gang are individual, unique NFTs?</span>
                <img class="faq__questions__question__img2" src="../assets/faq/plus.svg" alt="question" />
                <div class="faq__questions__question__rectangle2"></div>
            </div>
            <div class="faq__questions__question3">
                <span class="faq__questions__question__text3">Where can I buy or sell my Gang, even if that... umm... sounds inappropriate?</span>
                <img class="faq__questions__question__img3" src="../assets/faq/plus.svg" alt="question" />
                <div class="faq__questions__question__rectangle3"></div>
            </div>
            <div class="faq__questions__question4">
                <span class="faq__questions__question__text4">Oh! That's cool. So what is the mint price?</span>
                <img class="faq__questions__question__img4" src="../assets/faq/plus.svg" alt="question" />
                <div class="faq__questions__question__rectangle4"></div>
            </div>
            <div class="faq__questions__question5">
                <span class="faq__questions__question__text5">And what is the total supply of Foxies?</span>
                <img class="faq__questions__question__img5" src="../assets/faq/plus.svg" alt="question" />
                <div class="faq__questions__question__rectangle5"></div>
            </div>
        </div>
        <span class="faq_text">FAQ</span>
    </div>
</template>

<style scoped>

.faq {
    position: absolute;
    width: 1240px;
    height: 552px;
    left: 100px;
    top: 3428px;
}

.faq_text {
    position: absolute;
    width: 123px;
    height: 74px;
    left: 100px;
    top: 3428px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 74px;
    background: linear-gradient(100.19deg, rgba(0, 148, 255, 0.2) 0%, rgba(0, 211, 57, 0.2) 43.85%, rgba(147, 255, 0, 0.2) 85.91%), #FFFFFF;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-emphasis-color: transparent;
}

.faq__questions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    position: absolute;
    width: 713px;
    height: 552px;
    left: 627px;
    top: 3428px;
}

.faq__questions__question1 {
    width: 713px;
    height: 92px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.faq__questions__question__text1 {
    position: absolute;
    width: 568px;
    height: 28px;
    left: 40px;
    top: 32px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    border: 1px solid #0D0E0F;
}

.faq__questions__question__img1 {
    position: absolute;
    width: 24px;
    height: 24px;
    left: calc(50% - 24px/2 + 312.5px);
    top: calc(50% - 24px/2 - 230px);
    border-radius: 20px;
}

.faq__questions__question__rectangle1 {
    box-sizing: border-box;
    position: absolute;
    width: 713px;
    height: 92px;
    left: 0px;
    top: 0px;
    border: 1px solid #1B1B1C;
    border-radius: 20px;
}

.faq__questions__question2 {
    width: 713px;
    height: 92px;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.faq__questions__question__text2 {
    position: absolute;
    width: 568px;
    height: 28px;
    left: 40px;
    top: 140px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    border: 1px solid #0D0E0F;
}

.faq__questions__question__img2 {
    position: absolute;
    width: 24px;
    height: 24px;
    left: calc(50% - 24px/2 + 312.5px);
    top: calc(50% - 24px/2 - 122px);
    border-radius: 20px;
}

.faq__questions__question__rectangle2 {
    box-sizing: border-box;
    position: absolute;
    width: 713px;
    height: 92px;
    left: 0px;
    top: 108px;
    border: 1px solid #1B1B1C;
    border-radius: 20px;
}

.faq__questions__question3 {
    width: 713px;
    height: 120px;
    flex: none;
    order: 2;
    flex-grow: 0;
}

.faq__questions__question__text3 {
    position: absolute;
    width: 568px;
    height: 56px;
    left: 40px;
    top: 248px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    border: 1px solid #0D0E0F;
}

.faq__questions__question__img3 {
    position: absolute;
    width: 24px;
    height: 24px;
    left: calc(50% - 24px/2 + 312.5px);
    top: calc(50% - 24px/2 - 14px);
    border-radius: 20px;
}

.faq__questions__question__rectangle3 {
    box-sizing: border-box;
    position: absolute;
    width: 713px;
    height: 120px;
    left: 0px;
    top: 216px;
    border: 1px solid #1B1B1C;
    border-radius: 20px;
}

.faq__questions__question4 {
    width: 713px;
    height: 92px;
    flex: none;
    order: 3;
    flex-grow: 0;
}

.faq__questions__question__text4 {
    position: absolute;
    width: 568px;
    height: 28px;
    left: 40px;
    top: 384px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    border: 1px solid #0D0E0F;
}

.faq__questions__question__img4 {
    position: absolute;
    width: 24px;
    height: 24px;
    left: calc(50% - 24px/2 + 312.5px);
    top: calc(50% - 24px/2 + 122px);
    border-radius: 20px;
}

.faq__questions__question__rectangle4 {
    box-sizing: border-box;
    position: absolute;
    width: 713px;
    height: 92px;
    left: 0px;
    top: 352px;
    border: 1px solid #1B1B1C;
    border-radius: 20px;
}

.faq__questions__question5 {
    width: 713px;
    height: 92px;
    flex: none;
    order: 4;
    flex-grow: 0;
}

.faq__questions__question__text5 {
    position: absolute;
    width: 568px;
    height: 28px;
    left: 40px;
    top: 492px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    border: 1px solid #0D0E0F;
}

.faq__questions__question__img5 {
    position: absolute;
    width: 24px;
    height: 24px;
    left: calc(50% - 24px/2 + 312.5px);
    top: calc(50% - 24px/2 + 230px);
    border-radius: 20px;
}

.faq__questions__question__rectangle5 {
    box-sizing: border-box;
    position: absolute;
    width: 713px;
    height: 92px;
    left: 0px;
    top: 460px;
    border: 1px solid #1B1B1C;
    border-radius: 20px;
}

</style>