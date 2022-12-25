import React, { Component } from "react";
import Header from "../../components/CrudAxoisExample/Header/Header";
import "./CrudAxiosExample.css";
import EntryItem from "../../components/CrudAxoisExample/EntryItem/EntryItem";
import EntryModal from "../../components/EntryModal/EntryModal";

export default class CrudAxiosExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listEntries: [
        {
          id: 1,
          avatar:
            "https://toppng.com/uploads/preview/beauty-center-png-beauty-center-logo-png-115560977852gkdo8akey.png",
        },
        {
          id: 2,
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          id: 3,
          avatar:
            "https://toppng.com/uploads/preview/beauty-center-png-beauty-center-logo-png-115560977852gkdo8akey.png",
        },
        {
          id: 4,
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          id: 5,
          avatar:
            "https://toppng.com/uploads/preview/beauty-center-png-beauty-center-logo-png-115560977852gkdo8akey.png",
        },
        {
          id: 6,
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      isShowModal: false,
      avatar: "",
      isCreateNew: true,
      currentEntry: "",
      validateimage:""
    };
  }

  handleShowModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      isShowModal: true,
    }));
  };

  handleHideModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      isShowModal: false,
    }));
  };

  handleClick = (item) => {
    console.log("item", item);
    this.setState((prevState) => ({
      ...prevState,
      listEntries: this.state.listEntries.filter((it) => {
        if (it.id !== item.id) {
          return it;
        }
      }),
    }));
  };

  handleChangeAvatar = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      avatar: event.target.value,
    }));
  };

  handleSubmitEntry = () => {
    if(this.state.avatar === "") {
      this.setState((prevState) => ({
        ...prevState,
        validateimage:"missing image"
      }))
      return;
    }
    if (this.state.isCreateNew) {
      this.setState((prevState) => ({
        ...prevState,
        listEntries: [
          ...prevState.listEntries,
          {
            id: 10,
            avatar: prevState.avatar,
          },
        ],
        avatar: "",
        isShowModal: true,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        listEntries: [
          ...prevState.listEntries.map((it) => {
            if (it.id === prevState.currentEntry.id) {
              return { ...it, avatar: prevState.avatar };
            }
            return it;
          }),
        ],
      }));

      // const indexOfListEntry = this.state.listEntries.findIndex(
      //   (it) => it.id === this.state.currentEntry.id
      // );

      // console.log("indexOfListEntry", indexOfListEntry);

      // console.log(
      //   "last entries",
      //   this.state.listEntries.slice(
      //     indexOfListEntry + 1,
      //     this.state.listEntries.length - 1
      //   )
      // );

      // this.setState((prevState) => ({
      //   ...prevState,
      //   listEntries: [
      //     ...prevState.listEntries.slice(0, indexOfListEntry),
      //     {
      //       ...prevState.currentEntry,
      //       avatar: prevState.avatar,
      //     },
      //     ...prevState.listEntries.slice(
      //       indexOfListEntry,
      //       prevState.listEntries.length - 1
      //     ),
      //   ],
      // }));
    }
  };

  handleClickEntryItem = (item) => {
    this.setState((prevState) => ({
      ...prevState,
      avatar: item.avatar,
      isCreateNew: false,
      currentEntry: { ...item },
    }));
  };

  render() {
    return (
      <>
        <Header handleShowModal={this.handleShowModal} />
        <main className="wrap_list" id="wrap_list">
          {this.state.listEntries.map((item) => {
            return (
              <EntryItem
                key={item.id}
                avatar={item.avatar}
                handleClick={() => this.handleClick(item)}
                handleShowModal={this.handleShowModal}
                handleClickEntryItem={() => this.handleClickEntryItem(item)}
              />
            );
          })}
        </main>
        {this.state.isShowModal && (
          <EntryModal
            handleHideModal={this.handleHideModal}
            avatar={this.state.avatar}
            handleChangeAvatar={this.handleChangeAvatar}
            handleSubmitEntry={this.handleSubmitEntry}
            isCreateNew={this.state.isCreateNew}
            validateimage = {this.state.validateimage}
          />
        )}
      </>
    );
  }
}
