import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [qrValue, setQrValue] = useState(Date.now().toString());

  useEffect(() => {
    const interval = setInterval(() => {
      setQrValue(Date.now().toString());
    }, 30000); // refresh every 30 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Access Gate</Text>
      </View>

      {/* Profile */}
      <Image
        source={require("./assets/WhatsApp Image 2025-09-02 at 20.38.44_d7e13f4a.jpg")}
        style={styles.avatar}
      />

      <Text style={styles.name}> محمد شريف حسن السيد فرج </Text>
      <Text style={styles.unit}>
        Unit Number: [15 (المنطقة الرابعة) قصر الشوق ع 18]
      </Text>
      <Text style={styles.subOwner}>SubOwner</Text>

      {/* Instruction */}
      <Text style={styles.instruction}>Show this to the gate</Text>
      <Text style={styles.instruction}>scanner</Text>

      {/* QR Code */}
      <View style={styles.qrOuterBox}>
        <View style={styles.qrInnerBox}>
          <QRCode value={qrValue} size={180} />
        </View>
      </View>

      {/* Refresh Text */}
      <Text style={styles.refreshText}>
        Refreshes Automatically after 30 Sec
      </Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Invite a Guest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Invite to Beach</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <View style={styles.tabItem}>
          <Ionicons name="qr-code" size={22} color="#007bff" />
          <Text style={[styles.tabText, { color: "#007bff" }]}>
            Access Gate
          </Text>
        </View>
        <View style={styles.tabItem}>
          <Ionicons name="compass-outline" size={22} color="gray" />
          <Text style={styles.tabText}>Explore</Text>
        </View>
        <View style={styles.tabItem}>
          <Ionicons name="time-outline" size={22} color="gray" />
          <Text style={styles.tabText}>Visits</Text>
        </View>
        <View style={styles.tabItem}>
          <Ionicons name="ellipsis-horizontal" size={22} color="gray" />
          <Text style={styles.tabText}>More</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
  header: {
    width: "100%",
    paddingTop: 50,
    paddingBottom: 20, // less padding at the bottom
    paddingHorizontal: 50,
    backgroundColor: "#007bff",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  avatar: { width: 100, height: 100, borderRadius: 50, marginTop: 15 },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 8 },
  unit: {
    fontSize: 9,
    color: "black",
    textAlign: "center",
    marginTop: 4,
    fontWeight: "bold",
  },
  subOwner: {
    fontSize: 8,
    color: "red",
    marginBottom: 15,
    marginTop: 7,
    fontWeight: "bold",
  },

  instruction: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 0,
    paddingBottom: 0,
  },

  qrOuterBox: {
    padding: 7, // gap between border and QR
    borderWidth: 2, // thickness of outer line
    borderColor: "#000", // black border
    borderRadius: 0, // optional: rounded corners
    marginVertical: 15,
  },

  qrInnerBox: {
    backgroundColor: "white", // keep QR clean
    padding: 3, // extra space inside before QR starts
  },

  refreshText: {
    fontSize: 9, // slightly larger than before (easier to read)
    color: "black", // subtle gray
    textAlign: "center",
    marginTop: 0, // little space under the QR box
    width: 200, // keep it aligned with the QR width + border
  },

  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 60, // space above
    marginBottom: 20, // space below
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#007bff",
    marginHorizontal: 8,
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 13, fontWeight: "bold" },

  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
  },
  tabItem: { alignItems: "center" },
  tabText: { fontSize: 12, color: "gray", marginTop: 2 },
});
