<template>
  <div class="divContainer">
    <div class="divModal">
      <div class="divHeader">
        <h3 v-if="isApplicantModalVisible">Applicant Profile</h3>
        <h3 v-else-if="!isApplicantModalVisible && isMessageVisible">
          Project Green Tea Recruitment Test
        </h3>
      </div>
      <div class="divBody">
        <div class="divContent">
          <ApplicantProfile v-if="isApplicantModalVisible" />
          <ApplicantMessage
            v-else-if="!isApplicantModalVisible && isMessageVisible"
          />
        </div>
        <div class="divButtons">
          <button @click="onClickSaveApplicant" v-if="isApplicantModalVisible">
            Next
          </button>
          <button
            @click="onClickModal"
            v-else-if="!isApplicantModalVisible && isMessageVisible"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicantProfile from "./ApplicantProfile.vue";
import ApplicantMessage from "./ApplicantMessage.vue";

export default {
  name: "ApplicantModal",
  components: {
    ApplicantProfile,
    ApplicantMessage
  },
  data: function() {
    return {
      isApplicantModalVisible: true,
      isMessageVisible: false
    };
  },
  props: ["onClickModal"],
  computed: {
    styleApplicantModal() {
      if (this.isApplicantModalVisible) {
        return {};
      }
    }
  },
  methods: {
    onClickSaveApplicant() {
      if (this.isApplicantModalVisible) {
        this.isApplicantModalVisible = false;
        this.isMessageVisible = true;
      } else {
        this.isApplicantModalVisible = true;
        this.isMessageVisible = false;
      }
    }
  }
};
</script>

<style scoped src="../css/ApplicantModal.css" />
