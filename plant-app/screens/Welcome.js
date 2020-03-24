import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView
} from "react-native";

import { Button, Block, Text } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

class Welcome extends Component {
  static navigationOptions = {
    header: null
  };

  scrollX = new Animated.Value(0);

  state = {
    showTerms: false
  };

  renderTermsService() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.showTerms}
        onRequestClose={() => this.setState({ showTerms: false })}
      >
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between"
        >
          <Text h2 dark right>
          شروط الخدمة
          </Text>

          <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Text
              right
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              1. استخدامك للخدمة على مسؤوليتك وحدك. الخدمة المقدمة على أساس "كما هي" و "حسب توفرها".
            </Text>
            <Text
              right
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              2. دعم خدمات إكسبو متاح باللغة الإنجليزية فقط عبر البريد الإلكتروني.
            </Text>
            <Text
              right
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              3. أنت تدرك أن Expo يستخدم البائعين والاستضافة من طرف ثالث  الشركاء لتوفير الأجهزة والبرمجيات والشبكات ،
 التخزين والتكنولوجيا ذات الصلة المطلوبة لتشغيل الخدمة.
            </Text>
            <Text
            right
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              4. لا يجوز لك تعديل الخدمة أو تعديلها أو اختراقها أو تعديلها  موقع ويب آخر بحيث يشير ضمنًا إلى أنه مرتبط به الخدمة أو المعرض أو أي خدمة أخرى للمعرض.
            </Text>
            <Text
              right
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              5. يجوز لك استخدام خدمة الاستضافة الثابتة في صفحات المعرض فقط مسموح به ويهدف إلى استضافة صفحات مؤسستك ، شخصية  الصفحات ، أو صفحات المشروع ، وليس لأي غرض آخر. لا يجوز لك استخدام Expo Pages تنتهك علامة Expo التجارية أو حقوق أخرى أو في انتهاك القانون المعمول به. يحتفظ Expo بالحق في جميع الأوقات  لاستعادة أي نطاق فرعي لمعرض إكسبو بدون مسؤولية تجاهك.
            </Text>
            <Text
              right
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              6. أنت توافق على عدم إعادة إنتاج أو تكرار أو نسخ أو بيع أو إعادة بيع أو استغلال أي جزء من الخدمة أو استخدام الخدمة أو الوصول إلى الخدمة بدون إذن كتابي صريح من إكسبو.
            </Text>
            <Text
            right
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              7. يجوز لنا إزالة المحتوى والحسابات ، ولكن ليس من واجبنا ذلك تحتوي على محتوى نحدده حسب تقديرنا الخاص  غير قانوني ، مسيء ، مهدد ، تشهيري ، تشهيري ، إباحية أو فاحشة أو غير مرغوب فيها أو تنتهك أيًا كانت الملكية الفكرية للطرف أو شروط الخدمة هذه.
            </Text>
            <Text
            right
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
             8. الإساءة اللفظية أو الجسدية أو الكتابية أو غيرها (بما في ذلك التهديدات إساءة استخدام أو عقاب) أي عميل أو موظف أو عضو في إكسبو أو الضابط سيؤدي إلى إنهاء الحساب على الفور.
            </Text>
            <Text
            right
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              9. أنت تفهم أن المعالجة الفنية ونقلها الخدمة ، بما في ذلك المحتوى الخاص بك ، قد يتم نقلها غير مشفرة وتنطوي على (أ) عمليات الإرسال عبر الشبكات المختلفة ؛ و (ب) التغييرات للتوافق مع المتطلبات الفنية والتكيف معها ربط الشبكات أو الأجهزة.
            </Text>
            <Text
            right
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              10. لا يجب تحميل أو نشر أو استضافة أو نقل غير مرغوب فيه البريد الإلكتروني أو الرسائل القصيرة أو رسائل "البريد العشوائي".
            </Text>
          </ScrollView>

          <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button
              gradient
              onPress={() => this.setState({ showTerms: false })}
            >
              <Text center white>
              أفهم ، شكرا
              </Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    );
  }

  renderIllustrations() {
    const { illustrations } = this.props;

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: "visible" }}
          />
        )}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }
        ])}
      />
    );
  }

  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp"
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text h1 center bold>
            
            <Text h1 primary>
              {" "}
              Service Finder.
            </Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
          استمتع بالتجربة.
          </Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button gradient onPress={() => navigation.navigate("Login")}>
            <Text center semibold white>
            تسجيل الدخول
            </Text>
          </Button>
          <Button shadow onPress={() => navigation.navigate("SignUp")}>
            <Text center semibold>
            تسجيل حساب
            </Text>
          </Button>
          <Button onPress={() => this.setState({ showTerms: true })}>
            <Text center caption gray>
            شروط الخدمة
            </Text>
          </Button>
        </Block>
        {this.renderTermsService()}
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require("../assets/images/illustration_11.png") },
    { id: 2, source: require("../assets/images/illustration_22.png") },
    { id: 3, source: require("../assets/images/illustration_33.png") }
  ]
};

export default Welcome;

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  }
});
