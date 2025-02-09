import React, { useState } from "react";
import { SafeAreaView, View, ImageBackground, ScrollView, Text, TextInput, Image } from "react-native";

interface Props {}

const AIProgram: React.FC<Props> = (props) => {
    const [textInput1, setTextInput1] = useState<string>('');

    return (
        <SafeAreaView 
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ImageBackground 
                source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                resizeMode={'stretch'}
                style={{
                    flex: 1,
                }}
                >
                <ScrollView  
                    style={{
                        flex: 1,
                        shadowColor: "#00000040",
                        shadowOpacity: 0.3,
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowRadius: 4,
                        elevation: 4,
                    }}>
                    <View 
                        style={{
                            backgroundColor: "#CBDDEE",
                            borderRadius: 36,
                            paddingTop: 19,
                            paddingBottom: 9,
                            paddingHorizontal: 57,
                            marginBottom: 11,
                            marginHorizontal: 21,
                        }}>
                        <Text 
                            style={{
                                color: "#000000",
                                fontSize: 36,
                            }}>
                            {"Your AI Personalized Program"}
                        </Text>
                    </View>
                    <View 
                        style={{
                            backgroundColor: "#FFFFFFBF",
                            paddingVertical: 11,
                            marginBottom: 13,
                            marginHorizontal: 17,
                        }}>
                        <Text 
                            style={{
                                color: "#000000",
                                fontSize: 14,
                                marginBottom: 37,
                                marginHorizontal: 105,
                            }}>
                            {"Filter by muscle group..."}
                        </Text>
                        <View 
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                backgroundColor: "#7878801C",
                                borderRadius: 9,
                                paddingLeft: 2,
                                paddingRight: 46,
                                marginHorizontal: 10,
                            }}>
                            <View 
                                style={{
                                    width: 169,
                                    alignItems: "center",
                                    backgroundColor: "#FFFFFF",
                                    borderColor: "#00000008",
                                    borderRadius: 7,
                                    borderWidth: 1,
                                    paddingVertical: 6,
                                    shadowColor: "#00000008",
                                    shadowOpacity: 0.0,
                                    shadowOffset: {
                                        width: 0,
                                        height: 3
                                    },
                                    shadowRadius: 1,
                                    elevation: 1,
                                }}>
                                <Text 
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                    }}>
                                    {"Longhead"}
                                </Text>
                            </View>
                            <TextInput
                                placeholder={"Shorthead"}
                                value={textInput1}
                                onChangeText={setTextInput1}
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                    flex: 1,
                                    paddingVertical: 2,
                                }}
                            />
                        </View>
                    </View>
                    <View 
                        style={{
                            marginBottom: 28,
                            marginHorizontal: 43,
                        }}>
                        <View 
                            style={{
                                backgroundColor: "#ECF1F7",
                                borderColor: "#22CC47",
                                borderRadius: 21,
                                borderWidth: 6,
                                paddingTop: 1,
                                paddingBottom: 13,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 4
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <View 
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: 37,
                                    marginHorizontal: 4,
                                }}>
                                <Image
                                    source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfea0781-dba0-4650-a1f9-884bb603e5e3"}} 
                                    resizeMode={"stretch"}
                                    style={{
                                        borderRadius: 19,
                                        width: 145,
                                        height: 125,
                                    }}
                                />
                                <View 
                                    style={{
                                        width: 149,
                                        marginTop: 27,
                                    }}>
                                    <View >
                                        <Text 
                                            style={{
                                                color: "#000000",
                                                fontSize: 24,
                                            }}>
                                            {"Preacher Curls"}
                                        </Text>
                                        <View 
                                            style={{
                                                backgroundColor: "#BFC3DB5C",
                                                borderRadius: 26,
                                                paddingVertical: 7,
                                                paddingHorizontal: 25,
                                                marginTop: -1,
                                                marginHorizontal: 3,
                                            }}>
                                            <View 
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                }}>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                        marginRight: 4,
                                                        flex: 1,
                                                    }}>
                                                    {"KG\n"}
                                                </Text>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                    }}>
                                                    {"Reps"}
                                                </Text>
                                            </View>
                                            <View 
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    marginBottom: 2,
                                                }}>
                                                <View 
                                                    style={{
                                                        width: 14,
                                                        marginRight: 23,
                                                    }}>
                                                    <View >
                                                        <Image
                                                            source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae5ca993-99ad-4102-ace2-b111bd9a0947"}} 
                                                            resizeMode={"stretch"}
                                                            style={{
                                                                height: 10,
                                                            }}
                                                        />
                                                        <Text 
                                                            style={{
                                                                color: "#000000",
                                                                fontSize: 10,
                                                                marginTop: -8,
                                                                marginHorizontal: 4,
                                                            }}>
                                                            {"9"}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                        marginRight: 27,
                                                    }}>
                                                    {"X"}
                                                </Text>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                        flex: 1,
                                                    }}>
                                                    {"12"}
                                                </Text>
                                            </View>
                                            <View 
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    marginBottom: 2,
                                                }}>
                                                <View 
                                                    style={{
                                                        width: 14,
                                                        marginRight: 23,
                                                    }}>
                                                    <View >
                                                        <View 
                                                            style={{
                                                                height: 10,
                                                                backgroundColor: "#D9D9D9",
                                                                borderColor: "#000000",
                                                                borderWidth: 1,
                                                            }}>
                                                        </View>
                                                        <Text 
                                                            style={{
                                                                color: "#000000",
                                                                fontSize: 10,
                                                                marginTop: -8,
                                                                marginHorizontal: 2,
                                                            }}>
                                                            {"10"}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                        marginRight: 30,
                                                    }}>
                                                    {"X"}
                                                </Text>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                        flex: 1,
                                                    }}>
                                                    {"8"}
                                                </Text>
                                            </View>
                                            <View 
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    marginBottom: 2,
                                                }}>
                                                <View 
                                                    style={{
                                                        width: 14,
                                                        marginRight: 24,
                                                    }}>
                                                    <View >
                                                        <View 
                                                            style={{
                                                                height: 10,
                                                                backgroundColor: "#D9D9D9",
                                                                borderColor: "#000000",
                                                                borderWidth: 1,
                                                            }}>
                                                        </View>
                                                        <Text 
                                                            style={{
                                                                color: "#000000",
                                                                fontSize: 10,
                                                                marginTop: -8,
                                                                marginHorizontal: 2,
                                                            }}>
                                                            {"10"}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                        marginRight: 29,
                                                    }}>
                                                    {"X"}
                                                </Text>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                        flex: 1,
                                                    }}>
                                                    {"F"}
                                                </Text>
                                            </View>
                                            <View 
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                }}>
                                                <View 
                                                    style={{
                                                        width: 14,
                                                        marginRight: 24,
                                                    }}>
                                                    <View >
                                                        <View 
                                                            style={{
                                                                height: 10,
                                                                backgroundColor: "#D9D9D9",
                                                                borderColor: "#000000",
                                                                borderWidth: 1,
                                                            }}>
                                                        </View>
                                                        <Text 
                                                            style={{
                                                                color: "#000000",
                                                                fontSize: 10,
                                                                marginTop: -8,
                                                                marginHorizontal: 2,
                                                            }}>
                                                            {"11"}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                        marginRight: 29,
                                                    }}>
                                                    {"X"}
                                                </Text>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                        flex: 1,
                                                    }}>
                                                    {"F"}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View 
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginHorizontal: 57,
                                }}>
                                <Image
                                    source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ab27d31-edaa-4ed2-a4a2-58812c5f1a72"}} 
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 32,
                                        height: 32,
                                    }}
                                />
                                <Image
                                    source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86dd0906-c93f-46a7-8df6-0b3b4aa6a659"}} 
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 47,
                                        height: 47,
                                    }}
                                />
                            </View>
                        </View>
                        <Image
                            source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35a258b6-ec2a-4ab4-89ed-6279408f91fc"}} 
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -2,
                                right: 10,
                                width: 27,
                                height: 27,
                            }}
                        />
                    </View>
                    <View 
                        style={{
                            marginHorizontal: 43,
                        }}>
                        <View 
                            style={{
                                backgroundColor: "#ECF1F7",
                                borderRadius: 21,
                                paddingVertical: 18,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 4
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <View 
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: 33,
                                    marginHorizontal: 7,
                                }}>
                                <View 
                                    style={{
                                        width: 108,
                                    }}>
                                    <Image
                                        source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f69fe29-23a5-4be4-9170-9b141267a6dd"}} 
                                        resizeMode={"stretch"}
                                        style={{
                                            height: 111,
                                        }}
                                    />
                                    <Image
                                        source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebaf037f-4a98-46fe-a9fe-d5301eab6f75"}} 
                                        resizeMode={"stretch"}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            right: -49,
                                            width: 98,
                                            height: 110,
                                        }}
                                    />
                                </View>
                                <View 
                                    style={{
                                        width: 139,
                                    }}>
                                    <Text 
                                        style={{
                                            color: "#000000",
                                            fontSize: 24,
                                            marginBottom: 8,
                                        }}>
                                        {"Incline Dumbell Curl"}
                                    </Text>
                                    <View 
                                        style={{
                                            backgroundColor: "#BFC3DB5C",
                                            borderRadius: 26,
                                            paddingVertical: 5,
                                            paddingHorizontal: 20,
                                        }}>
                                        <View 
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                            }}>
                                            <View 
                                                style={{
                                                    width: 14,
                                                    marginTop: 3,
                                                }}>
                                                <View >
                                                    <Text 
                                                        style={{
                                                            color: "#000000",
                                                            fontSize: 10,
                                                        }}>
                                                        {"KG\n"}
                                                    </Text>
                                                    <Image
                                                        source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59b5bcb1-ac76-4c72-92e0-312d8fa60f7b"}} 
                                                        resizeMode={"stretch"}
                                                        style={{
                                                            height: 10,
                                                            marginTop: -1,
                                                        }}
                                                    />
                                                    <Text 
                                                        style={{
                                                            color: "#000000",
                                                            fontSize: 10,
                                                            marginTop: -8,
                                                            marginHorizontal: 4,
                                                        }}>
                                                        {"9"}
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text 
                                                style={{
                                                    color: "#000000",
                                                    fontSize: 10,
                                                    marginTop: 12,
                                                }}>
                                                {"X"}
                                            </Text>
                                            <View 
                                                style={{
                                                    width: 19,
                                                }}>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                        marginBottom: 3,
                                                    }}>
                                                    {"Reps"}
                                                </Text>
                                                <Text 
                                                    style={{
                                                        color: "#000000",
                                                        fontSize: 10,
                                                        marginHorizontal: 2,
                                                    }}>
                                                    {"12"}
                                                </Text>
                                            </View>
                                        </View>
                                        <View 
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: 3,
                                            }}>
                                            <View 
                                                style={{
                                                    width: 14,
                                                }}>
                                                <View >
                                                    <Image
                                                        source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01e56c1e-aab8-4dfe-b6e3-9e7274340fa8"}} 
                                                        resizeMode={"stretch"}
                                                        style={{
                                                            height: 10,
                                                        }}
                                                    />
                                                    <Text 
                                                        style={{
                                                            color: "#000000",
                                                            fontSize: 10,
                                                            marginTop: -8,
                                                            marginHorizontal: 1,
                                                        }}>
                                                        {"10"}
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text 
                                                style={{
                                                    color: "#000000",
                                                    fontSize: 10,
                                                }}>
                                                {"X"}
                                            </Text>
                                            <Text 
                                                style={{
                                                    color: "#000000",
                                                    fontSize: 10,
                                                }}>
                                                {"8"}
                                            </Text>
                                        </View>
                                        <View 
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: 2,
                                            }}>
                                            <View 
                                                style={{
                                                    width: 14,
                                                }}>
                                                <View >
                                                    <Image
                                                        source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e73eed8-8d0d-4b38-bcf7-3346361fe72e"}} 
                                                        resizeMode={"stretch"}
                                                        style={{
                                                            height: 10,
                                                        }}
                                                    />
                                                    <Text 
                                                        style={{
                                                            color: "#000000",
                                                            fontSize: 10,
                                                            marginTop: -9,
                                                            marginHorizontal: 2,
                                                        }}>
                                                        {"10"}
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text 
                                                style={{
                                                    color: "#000000",
                                                    fontSize: 10,
                                                }}>
                                                {"X"}
                                            </Text>
                                            <Text 
                                                style={{
                                                    color: "#000000",
                                                    fontSize: 10,
                                                }}>
                                                {"F"}
                                            </Text>
                                        </View>
                                        <View 
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}>
                                            <View 
                                                style={{
                                                    width: 14,
                                                }}>
                                                <View >
                                                    <Image
                                                        source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bdee791-10b2-4ef6-a6cd-b2403ce91db2"}} 
                                                        resizeMode={"stretch"}
                                                        style={{
                                                            height: 10,
                                                        }}
                                                    />
                                                    <Text 
                                                        style={{
                                                            color: "#000000",
                                                            fontSize: 10,
                                                            marginTop: -8,
                                                            marginHorizontal: 2,
                                                        }}>
                                                        {"11"}
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text 
                                                style={{
                                                    color: "#000000",
                                                    fontSize: 10,
                                                }}>
                                                {"X"}
                                            </Text>
                                            <Text 
                                                style={{
                                                    color: "#000000",
                                                    fontSize: 10,
                                                }}>
                                                {"F"}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Image
                                source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2362b347-930b-4f71-8d45-2145fc9e5945"}} 
                                resizeMode={"stretch"}
                                style={{
                                    height: 32,
                                    marginHorizontal: 111,
                                }}
                            />
                        </View>
                        <Image
                            source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee72ca8c-09b6-4a77-aadb-6c48826f84e3"}} 
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                bottom: -81,
                                right: -38,
                                width: 115,
                                height: 127,
                            }}
                        />
                        <Image
                            source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/243df372-a23a-4d24-bece-d3f069074eae"}} 
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                bottom: -50,
                                left: -20,
                                width: 97,
                                height: 94,
                            }}
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default AIProgram;
