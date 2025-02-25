import React from "react";
import { View, Text, TextInput, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons"; // Import icons

const { width } = Dimensions.get("window"); // Get screen width

const workouts = [
    { id: "1", title: "Advanced Cardio", rating: "4.8", image: require("../../assets/images/cardio.png") },
];

const trainingSessions = [
    { id: "3", title: "Core Strength Focus", rating: "4.7", image: require("../../assets/images/images.png") },
    { id: "4", title: "Muscle Sculpting", rating: "4.6", image: require("../../assets/images/image.png") },
    { id: "5", title: "Core Strength Focus", rating: "4.7", image: require("../../assets/images/images1.png") },
    { id: "6", title: "Muscle Sculpting", rating: "4.6", image: require("../../assets/images/image.png") },
];

const Homeindex = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
                <Text style={styles.welcome}>Welcome,</Text>
                <Text style={styles.status}>LastLogin Premium</Text>

                <View style={styles.mainbanner}>
                    <Text style={styles.banner}>You’ve Achieved VIP status!</Text>
                    <Text style={styles.bannersmall}>Unlock Exclusive Features Now</Text>
                </View>

                {/* Search Bar with User Image */}
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
                        <TextInput placeholder="Search your workouts" placeholderTextColor="gray" style={styles.searchInput} />
                    </View>
                    <Feather name="user" size={24} color="white" style={styles.userIcon} />
                </View>

                <Text style={styles.sectionTitle}>Explore top-notch workouts</Text>
                <FlatList
                    data={workouts}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={styles.largeCard}>
                            <Image source={item.image} style={styles.largeImage} />
                            <Text style={styles.rating}>{item.rating}</Text>
                            <View style={styles.cardTitleContainer}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.sectionTitle}>Efficient training sessions</Text>
                <FlatList
                    data={trainingSessions}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.rating}>{item.rating}</Text>
                            <View style={styles.cardTitleContainer}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={styles.sectionTitle}>Discover More</Text>

                <Text style={styles.sectionTitle}>Explore top-notch workouts</Text>
                <FlatList
                    data={workouts}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={styles.largeCard}>
                            <Image source={item.image} style={styles.largeImage} />
                            <Text style={styles.rating}>{item.rating}</Text>
                            <View style={styles.cardTitleContainer}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.sectionTitle}>Efficient training sessions</Text>
                <FlatList
                    data={trainingSessions}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.rating}>{item.rating}</Text>
                            <View style={styles.cardTitleContainer}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />

                {/* Extra spacing to prevent content from being hidden by bottom bar */}
                <View style={{ height: 5}} />
            </ScrollView>

            {/* Bottom Navigation Bar */}
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.bottomTab}>
                    <Feather name="home" size={24} color="white" />
                    <Text style={styles.bottomTabText}>Strength</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTab}>
                    <Feather name="list" size={24} color="white" />
                    <Text style={styles.bottomTabText}>Calories</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTab}>
                    <Feather name="list" size={24} color="white" />
                    <Text style={styles.bottomTabText}>Mindful</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTab}>
                    <Feather name="user" size={24} color="white" />
                    <Text style={styles.bottomTabText}>Arm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 18, backgroundColor: "black" },
    welcome: { fontSize: 24, fontWeight: "bold", color: "white", marginBottom: 5, fontFamily: "MontserratBold" },
    status: { fontSize: 16, color: "white", marginBottom: 15, fontFamily: "Montserrat" },
    mainbanner: {
        width: '100%',
        height: 100,
        backgroundColor: 'grey',
        borderRadius: 20,
        justifyContent: 'flex-start',
        padding: 20,
        marginBottom: 20
    },
    banner: { color: 'white', fontFamily: 'MontserratBold', fontSize: 18, marginBottom: 8 },
    bannersmall: { color: 'white', fontFamily: 'Montserrat' },
    searchContainer: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
    searchBar: { flexDirection: "row", alignItems: "center", backgroundColor: "#2A2A2A", padding: 10, borderRadius: 20, flex: 1, marginRight: 10 },
    searchIcon: { marginRight: 10 },
    searchInput: { flex: 1, color: "white", fontSize: 16, fontFamily: "Montserrat" },
    sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 16, color: "white", marginBottom: 10, fontFamily: "MontserratBold" },

    /* Large Card */
    largeCard: { width: 340, borderRadius: 12, overflow: "hidden", backgroundColor: 'grey', alignSelf: "center", marginHorizontal: 10, position: "relative" },
    largeImage: { width: '100%', height: 150 },

    /* Small Card */
    card: { margin: 15, width: 150, borderRadius: 8, overflow: "hidden", backgroundColor: 'grey', position: "relative" },
    image: { width: '100%', height: 100 },

    /* Rating Styling */
    rating: { position: "absolute", top: 8, right: 8, backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6, fontSize: 12, fontFamily: "MontserratBold" },

    /* Bottom Bar Styles */
    bottomBar: { flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: "#1E1E1E", paddingVertical: 15, position: "absolute", bottom: 0, left: 0, right: 0 },
    bottomTab: { alignItems: "center" },
    bottomTabText: { color: "white", fontSize: 12, marginTop: 5, fontFamily: "Montserrat" },
});

export default Homeindex;
