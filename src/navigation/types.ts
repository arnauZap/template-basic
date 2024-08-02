import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import {
	CompositeScreenProps,
	NavigatorScreenParams
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	OnBoarding: undefined
	Login: undefined
	Register: undefined
	Root: NavigatorScreenParams<RootTabParamList> | undefined
	TermsAndConditions: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
	Home: undefined
	OliveGrovesRoot: undefined
	OliveGroves: undefined
	OliveGrovesDetails: {oliveGroveId?: number}
	AddOliveGroves: undefined
	HarvestRoot: undefined
	Harvest: undefined
	HarvestAdd: undefined
	HarvestDetails: {harvestId:number}
	ProfileRoot: undefined
	Profile: undefined
	ProfileLoginFormation: undefined
	ProfileAccount: undefined
}

export type RootStackTabProps<Screen extends keyof RootTabParamList> =
	NativeStackScreenProps<RootTabParamList, Screen>

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		MaterialTopTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>
