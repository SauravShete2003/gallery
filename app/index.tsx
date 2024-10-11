import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function index() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.heading}>Beautiful Plants Collection</Text>
      <ScrollView>
        <View style={styles.plantContainer}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
              }}
              style={styles.plantImage}
            />
            <Text style={styles.plantName}>Banana Plant</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://dukaan.b-cdn.net/700x700/webp/media/dd1fefb6-88c6-4c0d-bbe3-59df1915d86f.png",
              }}
              style={styles.plantImage}
            />
            <Text style={styles.plantName}>Elegant Plant</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://static4.depositphotos.com/1026290/368/i/450/depositphotos_3682375-stock-photo-houseplant.jpg",
              }}
              style={styles.plantImage}
            />
            <Text style={styles.plantName}>House Plant</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://media.istockphoto.com/id/152962733/photo/house-plant-isolated-on-white.jpg?s=612x612&w=0&k=20&c=vza6XhFzjS-vfd6_IT2_0jaRZExEmWdC8Y1s1ZWEHoQ=",
              }}
              style={styles.plantImage}
            />
            <Text style={styles.plantName}>Indoor Plant</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://images.thdstatic.com/productImages/4d9c2693-53e0-4a46-828c-4e912a7885f7/svn/costa-farms-house-plants-10spathsweet-64_600.jpg",
              }}
              style={styles.plantImage}
            />
            <Text style={styles.plantName}>Costa Plant</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://4.imimg.com/data4/HL/NL/MY-13145983/peace-lily-plant-500x500.jpg",
              }}
              style={styles.plantImage}
            />
            <Text style={styles.plantName}>Peace Lily</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://fyf.tac-cdn.net/images/products/small/P-440.jpg?auto=webp&quality=60&width=650",
              }}
              style={styles.plantImage}
            />
            <Text style={styles.plantName}>Flowering Plant</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/274651d3-627f-43c3-b10f-b23a7a94c5bc.__CR0,0,1024,1024_PT0_SX300_V1___.jpg",
              }}
              style={styles.plantImage}
            />
            <Text style={styles.plantName}>Decorative Plant</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },

  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2d6a4f",
    textAlign: "center",
    marginVertical: 20,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },

  plantContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    margin: 10,
    alignItems: "center",
    width: 170,
    padding: 10,
  },

  plantImage: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },

  plantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    textAlign: "center",
  },
});
